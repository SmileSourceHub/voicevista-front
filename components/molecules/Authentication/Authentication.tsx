import { Button } from '@/atoms/Button/Button';
import { Input } from '@/atoms/Input/Input';
import { Label } from '@/atoms/Label/Label';
export const Authentication = () => {
  return (
    <form className="space-y-4">
      <div>
        <Label name='email'>Email</Label>
        <Input placeholder="Type your email.." type='email' name='email' classname='mt-1 p-2 w-full border rounded-md' />
      </div>
      <div>
        <Label name='email'>Password</Label>
        <Input placeholder="Type your password..." type='password' name='password' classname='mt-1 p-2 w-full border rounded-md'  />
      </div>
      <div>
        <Button classname='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600'>Submit</Button>
      </div>
    </form>
  );
};