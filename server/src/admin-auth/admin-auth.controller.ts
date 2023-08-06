import { Controller, Post, Body, Get } from '@nestjs/common';
import { AdminDto } from './dto/admin.dto';
import { AdminAuthService } from './admin-auth.service';

@Controller('admin-auth')
export class AdminAuthController {

    constructor(private adminAuthService: AdminAuthService){}

    @Get('/login')
    adminLogin(@Body() adminDto: AdminDto){
        return this.adminAuthService.adminLogin(adminDto);
    }
}
