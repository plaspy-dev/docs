---
slug: /tk_star/tk209a/configuration
id: tk209a-configuration
sidebar_label: Configuration
title: TK-Star - TK209A Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TK-Star TK209A con Plaspy, incluidos ajustes del servidor y comandos SMS
keywords:
  - TK Star TK209A
  - configuración TK209A
  - configuración TK209A para Plaspy
  - ajustes servidor TK209A
  - configuración rastreador GPS TK209A
  - ajustes servidor Plaspy
  - configuración dispositivo Plaspy
  - rastreo de vehículos TK209A
  - comandos SMS rastreador GPS
  - configuración seguimiento de flotas
---

# TK-Star - TK209A Configuración

Esta página documenta la información pública necesaria para usar el rastreador TK-Star TK209A con Plaspy. Describe los ajustes del servidor de Plaspy que debe ingresar en el dispositivo y presenta los comandos SMS públicos que se usan comúnmente para la configuración inicial. Utilice esta guía para conectar el TK209A a Plaspy y obtener seguimiento en tiempo real y almacenamiento de rutas en el servidor.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Todos los dispositivos en Plaspy usan el mismo puerto, y la plataforma acepta UDP o TCP en ese puerto. Los pasos exactos de configuración por parte del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del distribuidor, por lo que confirme los detalles específicos del dispositivo con la documentación de TK-Star cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el TK209A para comunicarse de forma fiable con Plaspy y que aparezca como un dispositivo activo en la plataforma. Los comandos públicos en esta guía muestran el flujo típico de configuración vía SMS y la información del endpoint de Plaspy a la que el rastreador debe reportar.

- Configure el rastreador para usar Plaspy como su endpoint GPRS para que las ubicaciones y alertas se entreguen a la plataforma.
- Establezca el APN del dispositivo y, opcionalmente, las credenciales APN para que el rastreador pueda abrir una conexión de datos.
- Apunte el dispositivo al dominio o IP del servidor de Plaspy y al puerto compartido utilizado por la plataforma.
- Habilite cargas periódicas y ponga el dispositivo en modo GPRS para que envíe actualizaciones regulares de posición a Plaspy.
- Valide la conectividad y confirme que el rastreador reporta a Plaspy usando la visibilidad en la plataforma.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y usa el mismo puerto para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Un TK209A con batería cargada y una tarjeta SIM activa que tenga datos móviles habilitados y los datos del APN disponibles.
- Acceso a un teléfono o a un gateway SMS capaz de enviar comandos SMS al número de la SIM del rastreador.
- La contraseña del dispositivo si el rastreador exige autenticación por SMS (la contraseña por defecto pública usada en los comandos de ejemplo es 123456).
- Acceso a la documentación oficial de TK-Star o a las herramientas del fabricante como referencia en caso de variaciones de firmware.
- Una cuenta en Plaspy o acceso a la plataforma Plaspy para validar que el dispositivo aparece y reporta correctamente.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el TK209A abre un canal de datos GPRS y envía periódicamente datos de ubicación y eventos al endpoint y puerto del servidor Plaspy. Plaspy procesa esos mensajes y muestra la ubicación del dispositivo, su estado y las alarmas en paneles y en informes históricos.

- El rastreador se configura para reportar al endpoint y puerto compartido de Plaspy, de modo que los datos lleguen a la plataforma.
- Las actualizaciones de posición y las alarmas se envían desde el dispositivo a d.plaspy.com o a la IP 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que el mismo puerto y endpoint funcionan para los dispositivos compatibles.
- El dispositivo puede reportar movimiento, vibración y otros eventos que Plaspy utiliza para alertas y activadores de flujos de trabajo.
- Los intervalos de subida regulares permiten visibilidad casi en tiempo real en Plaspy y almacenamiento de rutas en el servidor para revisión histórica.

## Flujo común de configuración

1. Acceda al método de configuración oficial de TK-Star para su dispositivo, normalmente usando comandos SMS o la herramienta del fabricante según documente TK-Star.
2. Configure los ajustes APN del dispositivo (apn, y opcionalmente usuario y contraseña) para que el rastreador pueda establecer la conexión GPRS.
3. Ingrese el endpoint de Plaspy configurando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 y establezca el puerto 8888.
4. Si el dispositivo ofrece selección de transporte, elija UDP o TCP según lo requiera el equipo, teniendo en cuenta que Plaspy acepta ambos en el puerto 8888.
5. Aplíquele y guarde la configuración en el dispositivo y, si es necesario, reinicie el rastreador para activar los nuevos ajustes.
6. Valide que el TK209A reporta a Plaspy confirmando que el dispositivo aparece y envía actualizaciones en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El TK209A puede configurarse por SMS. A continuación se muestran los comandos SMS públicos en el orden documentado. Reemplace los marcadores de posición y envíe cada SMS al número del dispositivo. Los ejemplos más abajo usan la contraseña por defecto 123456 que aparece en el contenido público.

1. Restauración de fábrica inicial opcional (use solo si necesita restablecer la configuración)
```text
begin123456
```

2. Establecer el APN del operador (reemplace {{apn}} por el APN de su operador)
```text
apn123456 {{apn}}
```

3. Establecer el nombre de usuario del APN si su operador lo requiere (reemplace {{apnu}} por el usuario)
```text
apnuser123456 {{apnu}}
```

4. Establecer la contraseña del APN si su operador lo requiere (reemplace {{apnp}} por la contraseña)
```text
apnpasswd123456 {{apnp}}
```

5. Configurar el servidor GPRS a Plaspy usando la IP del servidor y el puerto
```text
adminip123456 54.85.159.138 8888
```

6. Establecer el intervalo de subida a 60 segundos
```text
upload123456 60
```

7. Cambiar el dispositivo a modo GPRS
```text
gprs123456
```

Notas sobre los marcadores de posición
- {{apn}} es la cadena APN del operador móvil requerida para la conectividad de datos.
- {{apnu}} es el usuario del APN si su red exige autenticación.
- {{apnp}} es la contraseña del APN si su red exige autenticación.
- La contraseña SMS por defecto mostrada en estos comandos públicos es 123456. Consulte la documentación de TK-Star para cambiar la contraseña de forma segura si lo considera necesario.

## Observaciones sobre la configuración

- La configuración por SMS es un método común para este dispositivo; confirme la sintaxis exacta de los comandos SMS y el comportamiento de la contraseña en el manual de TK-Star para su versión de firmware.
- Las diferencias de firmware del fabricante, variantes regionales de los módulos y las revisiones de hardware pueden cambiar los comandos disponibles o el orden requerido para la configuración.
- Si el dispositivo o el firmware ofrece selección de transporte, puede elegir UDP o TCP. Plaspy acepta ambos en el puerto 8888 y detecta automáticamente el protocolo del rastreador.
- Mantenga seguras las credenciales APN y las contraseñas por defecto. Cambie las credenciales predeterminadas siguiendo las indicaciones de TK-Star cuando sea posible.
- Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que establecer el servidor a 54.85.159.138 8888 o a d.plaspy.com 8888 es el enfoque estándar para esta integración.

## Por qué usar Plaspy con esta configuración

Configurar el TK209A para que reporte a Plaspy ofrece visibilidad centralizada y facilita la gestión de flotas para vehículos y activos remotos. Con el rastreador enviando actualizaciones periódicas a Plaspy, las organizaciones pueden monitorear ubicaciones, recibir alertas de eventos y revisar rutas históricas almacenadas en el servidor para apoyar operaciones, recuperación y análisis.

Para obtener más información sobre Plaspy y cómo la plataforma puede gestionar dispositivos TK209A, visite https://www.plaspy.com. Para los pasos de configuración más recientes por dispositivo, notas de firmware y orientación del fabricante, verifique la información en el sitio de TK-Star https://www.tk-star.com/.
