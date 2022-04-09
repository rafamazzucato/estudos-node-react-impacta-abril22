const {UsuarioModel} = require('./model');

exports.login = async (req, res) =>{
    try{
        const {login, senha} =  req?.body;

        if(!login || !senha){
            res.status(400);
            res.send({error: 'Favor informar usuario e senha.'});
            return;
        }

        const foundData = await UsuarioModel.find({email : login, senha : senha});
        if(foundData && foundData.length > 0){
            const first = foundData[0];
            res.status(200);
            res.send({msg: `Usuario ${first.nome} autenticado com sucesso.`});
        }else{
            res.status(400);
            res.send({error: 'Usuario e senha nao encontrados.'});
        }
    }catch(e){
        console.log('Ocorreu erro ao autenticar usuario:', e);
        res.status(500);
        res.send({error: 'Ocorreu erro ao autenticar usuario, tente novamente ou entre em contato.'});
    }
}

exports.cadastro = async(req, res) =>{
    try{
        const {nome, email, senha} =  req?.body;

        if(!nome || nome.length < 2){
            res.status(400);
            res.send({error: 'Nome invalido.'});
            return;
        }

        if(!email || email.length < 6 || !email.includes('.') || !email.includes('@')){
            res.status(400);
            res.send({error: 'Email invalido.'});
            return;
        }

        if(!senha || senha.length < 4){
            res.status(400);
            res.send({error: 'Senha invalida.'});
            return;
        }

        const foundData = await UsuarioModel.find({email : email});
        if(foundData && foundData.length > 0){
            const first = foundData[0];
            res.status(400);
            res.send({msg: `Ja existe usuario com email informado.`});
            return;
        }

        const usuario = {
            nome,
            email,
            senha
        };

        await UsuarioModel.create(usuario);
        res.status(200);
        res.send({error: 'Usuario cadastrado com sucesso.'});
    }catch(e){
        console.log('Ocorreu erro ao salvar usuario:', e);
        res.status(500);
        res.send({error: 'Ocorreu erro ao salvar usuario, tente novamente ou entre em contato.'});
    }
}