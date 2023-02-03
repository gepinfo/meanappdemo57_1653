module.exports = {
    requiresCompatibilities: [
        "FARGATE"
    ],
    "inferenceAccelerators": [],
    "containerDefinitions": [
        {
            "name": "ticket-1653",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanappdemo57-1653-ticket:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8017",
                    "protocol": "tcp",
                    "hostPort": "8017"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanappdemo57.local:27017/meanappdemo57_1653?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanappdemo57.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanappdemo57.local:8080"},{"name":"SECURITYURL","value":"http://meanappdemo57.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanappdemo57.local:8001"},{"name":"ADMINURL","value":"http://meanappdemo57.local:8004"},{"name":"CAMUNDAURL","value":"http://meanappdemo57.local:8002"},{"name":"GCAMURL","value":"http://meanappdemo57.local:8007"},{"name":"APIGATEWAY","value":"http://meanappdemo57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanappdemo57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanappdemo57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "types-1653",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanappdemo57-1653-types:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8018",
                    "protocol": "tcp",
                    "hostPort": "8018"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanappdemo57.local:27017/meanappdemo57_1653?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanappdemo57.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanappdemo57.local:8080"},{"name":"SECURITYURL","value":"http://meanappdemo57.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanappdemo57.local:8001"},{"name":"ADMINURL","value":"http://meanappdemo57.local:8004"},{"name":"CAMUNDAURL","value":"http://meanappdemo57.local:8002"},{"name":"GCAMURL","value":"http://meanappdemo57.local:8007"},{"name":"APIGATEWAY","value":"http://meanappdemo57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanappdemo57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanappdemo57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
        {
            "name": "severity-1653",
            "image": `${process.env.AWS_ACCOUNT_ID}.dkr.ecr.us-east-1.amazonaws.com/geppetto-generatedcode-meanappdemo57-1653-severity:latest`,
            "memoryReservation": "300",
            "resourceRequirements": null,
            "essential": true,
            "portMappings": [
                {
                    "containerPort": "8019",
                    "protocol": "tcp",
                    "hostPort": "8019"
                }
            ],
            "environmentFiles": null,
            "environment": [{"name":"MONGO_DB_URL","value":"mongodb://admin:password@meanappdemo57.local:27017/meanappdemo57_1653?authSource=admin"},{"name":"MONGO_DOMAIN","value":"meanappdemo57.local"},{"name":"CAMUNDAPOD_URL","value":"http://meanappdemo57.local:8080"},{"name":"SECURITYURL","value":"http://meanappdemo57.local:8003"},{"name":"AUTHPROXYURL","value":"http://meanappdemo57.local:8001"},{"name":"ADMINURL","value":"http://meanappdemo57.local:8004"},{"name":"CAMUNDAURL","value":"http://meanappdemo57.local:8002"},{"name":"GCAMURL","value":"http://meanappdemo57.local:8007"},{"name":"APIGATEWAY","value":"http://meanappdemo57.local:8000"}],
            "secrets": null,
            "mountPoints": [
                {
                  "readOnly": null,
                  "containerPath": "/path/to/container",
                  "sourceVolume": "meanappdemo57"
                }
              ],
            "volumesFrom": null,
            "hostname": null,
            "user": null,
            "workingDirectory": null,
            "extraHosts": null,
            "logConfiguration": {
                "logDriver": "awslogs",
                "options": {
                    "awslogs-group": "/ecs/meanappdemo57",
                    "awslogs-region": "us-east-1",
                    "awslogs-stream-prefix": "ecs",
                    "awslogs-create-group": "true"
                }
            },
            "ulimits": null,
            "dockerLabels": null,
            "dependsOn": null,
            "repositoryCredentials": {
                "credentialsParameter": ""
            }
        },          
    ],
    "volumes": [
        {
        "fsxWindowsFileServerVolumeConfiguration": null,
        "efsVolumeConfiguration": {
            "transitEncryptionPort": null,
            "fileSystemId": `${process.env.EFS_ID}`,
            "authorizationConfig": {
            "iam": "DISABLED",
            "accessPointId": null
            },
            "transitEncryption": "DISABLED",
            "rootDirectory": "/"
        },
        "name": "meanappdemo57",
        "host": null,
        "dockerVolumeConfiguration": null
        }
    ],
    "networkMode": "awsvpc",
    "memory": "4096",
    "cpu": "1024",
    "executionRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`,
    "family": "meanappdemo570",
    "tags": [],
    "placementConstraints": [],
    "taskRoleArn": `arn:aws:iam::${process.env.AWS_ACCOUNT_ID}:role/${process.env.AWS_ROLE_FOR_FARGATE}`

};
var ConfigurationJSON = JSON.stringify(module.exports);
const config = module.exports;

const jsonConfig = JSON.parse(JSON.stringify(ConfigurationJSON))

console.log(jsonConfig)
