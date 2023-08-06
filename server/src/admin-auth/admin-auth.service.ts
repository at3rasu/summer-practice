import { Injectable } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';

@Injectable()
export class AdminAuthService {

    async adminLogin(adminDto: AdminDto){
        return adminDto.password == "irit";
    }
}
