import { Router } from 'express'
import User from '../models_v2/user'

/*
  2020.02.10
  지금 버전의 문제는 삽입에 실패해도 AUTO_INCREMENT 벨류가 증가한다는 것임.
  실패한 경우 xml 형식의 메세지를 출력하지 말고 전체 API Response 핸들러로 감싸서 표현하는 편이 좋겠다.
*/

export const users = Router()

function makeItSalty (password:string) {

};

users.post('/join', async (req, res, next) => {
  // 사용자로부터 password 를 받아서 password_salt 를 생성해서 추가한다
  // https://starplatina.tistory.com/entry/%EB%B9%84%EB%B0%80%EB%B2%88%ED%98%B8-%ED%95%B4%EC%8B%9C%EC%97%90-%EC%86%8C%EA%B8%88%EC%B9%98%EA%B8%B0-%EB%B0%94%EB%A5%B4%EA%B2%8C-%EC%93%B0%EA%B8%B0
  let rs = null;
  try {
    rs = await User.create(req.body);
    res.json(rs);
  } catch (e) {
    next(e);
  }
});

users.post('/login', async (req, res, next) => {
  // SNS 구분 값이 있다면 해당 로직으로 넘어간다 ...
  // ID/PW 가 맞으면 세션 쿠키를 발행하고 response 헤더에 정보를 셋한다
  let rs = null; 
  try {
    let { user_id, password } = req.body;
    if(user_id && password) {
      rs = await User.findOne({
        where: req.body
      });
      if(!rs) throw 'Check your ID or Password again';
      // jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt
      // jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt
      // jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt jwt
      res.json(rs);
    } else throw 'A required field does not provided';
  } catch (e) {
    next(e);
  }
});

users.get('/', async (req, res, next) => {
  try {
    res.json(await User.findAll())
  } catch (e) {
    next(e)
  }
});

// CRUD 로 치면 save 인가 ...
users.post('/', async (req, res, next) => {
  try {
    let rs = null;
    if(req.body.id) {
      rs = await User.update(req.body, { where : { id : req.body.id }});
    } else {
      rs = await User.create(req.body);
    }
    res.json(rs);
  } catch (e) {
    next(e);
  }
});

// IDS 로 들어오는 경우를 추가 고려해야 함 
users.delete('/', async (req, res, next) => {
  let rs = null;
  try {
    rs = await User.destroy({
      where : { id : req.body.id }
    });
    res.json(rs);
  } catch (e) {
    next(e);
  }
});
