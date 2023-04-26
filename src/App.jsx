import { BrowserRouter as Router, Routes, Route, BrowserRouter}
	from 'react-router-dom';
//import Home from './pages';
import Home from './screens/home';
import Accept from './screens/accept';
import Committee from './screens/committee';
import Login from './screens/Login/login';
import Register from './screens/register';
import PapersOnGo from './screens/papersongo';
import Submission from './screens/submission';
import Evaluation from './screens/evaluation';
import {AuthorLogin} from "./screens/AuthorLogin/authorlogin"
import {ChairLogin} from "./screens/ChairLogin/Chairlogin"
import {CommitteeLogin} from "./screens/CommitteeLogin/Committeelogin"
import {AuthorRegister} from "./screens/AuthorRegister/authorregister"
import { GuestLogin } from './screens/GuestLogin/GuestLogin';
import UserLanding from './screens/UserLanding/UserLanding';
import CommitteeLanding from './screens/committeeLanding/CommitteeLanding';
import ChairLanding from './screens/chairLanding/ChairLanding';
// import SubmitPaper from './screens/SubmitPaper/SubmitPaper';
import SubmitPaper from './screens/Submit/paper';

function App() {
  return (
    <BrowserRouter>
    {/* <Navbar /> */}
    <Routes>
      <Route exact path='/'  element={<Home />} />
      <Route path='/accept' element={<Accept/>} />
      <Route path='/committee' element={<Committee/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/submission' element={<Submission/>} />
      <Route path='/evaluation' element={<Evaluation/>} />
      <Route path='/papersongo' element={<PapersOnGo/>}/>
      <Route path='/author/login' element={<AuthorLogin/>} />
      <Route path='/chair/login' element={<ChairLogin/>} />
      <Route path='/committee/login' element={<CommitteeLogin/>} />
      <Route path='/chair/home' element={<ChairLanding/>} />
      <Route path='/committee/home' element={<CommitteeLanding/>} />
      <Route path='/author/register' element={<AuthorRegister/>} />
      <Route path='/login/guest' element={<GuestLogin/>} />
      <Route path="/author/home" element={<UserLanding/>}/>
      <Route path="/author/home/submit" element={<SubmitPaper/>}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
