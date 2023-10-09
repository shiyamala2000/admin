export class CaseManagement {
    id:number;
    role:String;
    lAProposerName:String;
    documentName:String;
    requestDate:Date;
    medicalAppointmentDate:Date;
    status:String;
    receivedDate:Date;
    firstOrReTestIndicator:String;
    followUp:String;


    constructor(){
        this.id=0;
        this.role='';  
        this.lAProposerName='';
        this.documentName='';
        this.requestDate=new Date();
        this.medicalAppointmentDate=new Date();
        this.status='';
        this.receivedDate=new Date();
        this.firstOrReTestIndicator='';
        this.followUp='';      }
}
