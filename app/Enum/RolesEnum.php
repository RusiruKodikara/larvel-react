<?php

namespace App\Enum;

enum RolesEnum: string
{
    case Admin = 'admin';
    case User = 'user';
    case Commentor = 'commentor';

    public static function labels():array
    {
        return [
            self::Admin->value => 'Admin',
            self::User->value => 'User',
            self::Commentor->value => 'Commentor',
        ];
    }

    public function label(){
        return match($this){
            self::Admin => 'Admin',
            self::Commentor => 'Commentor',
            self::User => 'User',
        };
    }
}
