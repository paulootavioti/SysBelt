import { Request, Response, NextFunction } from "express";
import { AppError } from "../errors/AppError";

export function ensureRole(
  roles: string[]
) {

  return (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {

    if (
      !roles.includes(req.user.perfil)
    ) {
      throw new AppError(
        "Acesso negado.",
        403
      );
    }

    next();

  };

}