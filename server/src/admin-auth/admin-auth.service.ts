import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminAuthService {

    async adminLogin(adminDto: AdminDto){
        if (adminDto.password != "irit"){
            throw new UnauthorizedException({message: "Неправильный пароль"})
        }
        return adminDto
    }
}
