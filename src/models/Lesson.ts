import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('lesson')
export default class Lesson {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column()
  description: string

  @CreateDateColumn()
  createdat: Date

  @UpdateDateColumn()
  updted_at: Date
}
