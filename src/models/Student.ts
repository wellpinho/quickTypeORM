import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('student')
export default class Student {
  @PrimaryGeneratedColumn('uuid')
  id: string

  @Column({ length: 100 })
  name: string

  @Column()
  key: string

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date
}
