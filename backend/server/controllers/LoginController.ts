import { Request, Response, NextFunction } from 'express';
import { get, controller, use, post, bodyValidator } from './decorators';

@controller('/auth')
class LoginController {
    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(`
            <form method="POST">
                <div>
                    <label>Email</label>
                    <input name="email" />
                </div>
                <div>
                    <label>Password</label>
                    <input name="password" type="password" />
                </div>
                <button>Submit</button>
            </form>
        `);
    };

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const {email, password} = req.body;
        if (email === 'jay@isgreat.com') {
            req.session = { loggedIn: true };
            res.redirect('/');
        } else {
            res.status(422).send('You must provide an email.')
        }
    };

    @get('/logout')
    getLogout(req: RequestWithBody, res: Response) {
        req.session = undefined;
        res.redirect('/');
    };
}
