import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TestApiService } from './test-api.service';
import { CreateTestApiDto } from './dto/create-test-api.dto';
import { UpdateTestApiDto } from './dto/update-test-api.dto';

@Controller('test-api')
export class TestApiController {
  constructor(private readonly testApiService: TestApiService) {}

  @Post()
  create(@Body() createTestApiDto: CreateTestApiDto) {
    return this.testApiService.create(createTestApiDto);
  }

  @Get()
  findAll() {
    return this.testApiService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.testApiService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTestApiDto: UpdateTestApiDto) {
    return this.testApiService.update(+id, updateTestApiDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testApiService.remove(+id);
  }
}
