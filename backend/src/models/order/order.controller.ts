import {
  Controller,
  Get,
  Post,
  Param,
  UseGuards,
  Put,
  Request,
  Query,
} from '@nestjs/common';
import { OrderService } from './order.service';
import { ApiBearerAuth, ApiQuery, ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from '../../common/guards/jwt-auth.guard';

@Controller('Orders')
@ApiTags('Orders')
export class OrderController {
  constructor(private readonly OrderService: OrderService) {}

  @Post(':bookId')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async create(@Param('bookId') bookId: string, @Request() req) {
    return this.OrderService.create(req.user.id, bookId);
  }

  @Get()
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  @ApiQuery({ name: 'search', required: false })
  findAll(@Request() req, @Query('search') search?: string){
    return this.OrderService.findAll(req.user.id, search);
  }

  @Get(':id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.OrderService.findOne(id);
  }

  @Put('/cancel/:id')
  @ApiBearerAuth('access-token')
  @UseGuards(JwtAuthGuard)
  async update(@Param('id') id: string, @Request() req) {
    return await this.OrderService.cancel(req.user.id, id);
  }
}
