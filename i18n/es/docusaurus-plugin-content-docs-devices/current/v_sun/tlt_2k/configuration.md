---
slug: /v_sun/tlt_2k/configuration
id: tlt_2k-configuration
sidebar_label: Configuration
title: V-SUN - TLT-2K Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el V-SUN TLT-2K con Plaspy, con ajustes de servidor y comandos SMS
keywords:
  - Configuración V-SUN TLT-2K
  - Instalación V-SUN TLT-2K
  - TLT-2K Plaspy
  - Configuración rastreador GPS
  - Configuración seguimiento de vehículos
  - Configuración servidor rastreador
  - Ajustes servidor Plaspy
  - Configuración rastreador GSM GPRS
  - Comandos SMS de configuración
  - Integración con plataforma de rastreo
---

# V-SUN - Configuración del TLT-2K

Esta página documenta el contexto público de configuración para usar el rastreador V-SUN TLT-2K con Plaspy. Resume los ajustes de servidor más prácticos, la preparación necesaria y ejemplos de comandos SMS que se emplean habitualmente para apuntar un TLT-2K a Plaspy, de modo que el dispositivo pueda reportar posiciones y ser visible en la plataforma. Utilice esto como referencia de configuración y complételo con el manual del dispositivo y las indicaciones del fabricante para instrucciones completas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, aunque los pasos específicos en el lado del fabricante pueden variar según firmware, versión de hardware, tipo de instalación y herramientas del proveedor. El TLT-2K admite configuración por SMS y por GPRS; cuando hay comandos SMS públicos disponibles se muestran a continuación, incluyendo la contraseña por defecto del ejemplo público.

## Resumen de configuración

Preparar un TLT-2K para Plaspy implica apuntar el dispositivo al endpoint de servidor de Plaspy y confirmar que el dispositivo puede enviar actualizaciones de posición por la red móvil. Los pasos públicos de configuración buscan asegurar que el rastreador tenga el APN y los parámetros de servidor correctos, activar el modo GPRS y verificar el reporte para que la unidad aparezca en Plaspy.

- Configure el APN y las credenciales para que el rastreador establezca datos GPRS.
- Establezca la dirección del servidor GPRS a Plaspy y el puerto compartido para que los datos se dirijan a Plaspy.
- Active el modo GPRS y el reporte de GPS para que se envíen actualizaciones periódicas de posición.
- Valide la conectividad confirmando que el dispositivo reporta a Plaspy y que las actualizaciones aparecen en la plataforma.
- Use los comandos SMS disponibles o las herramientas del fabricante para aplicar los ajustes cuando corresponda.

## Ajustes del servidor Plaspy

- Dominio de servidor d.plaspy.com para configuración basada en DNS.
- IP del servidor 54.85.159.138 como endpoint numérico para configuración directa por IP.
- Puerto 8888 que es el puerto que Plaspy utiliza para todos los dispositivos.
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que solo necesita apuntar el dispositivo al endpoint de Plaspy.
- Todos los dispositivos en Plaspy usan el mismo puerto, por lo que no requiere números de puerto específicos por dispositivo.

## Requisitos previos típicos antes de la configuración

- Un dispositivo TLT-2K instalado y con alimentación, con una tarjeta SIM funcional y capacidad de datos para GPRS.
- Conocimiento del APN del operador de la SIM y, si aplica, del nombre de usuario y la contraseña opcionales del APN.
- Acceso al método de configuración del fabricante para el dispositivo, comúnmente comandos SMS o una herramienta del proveedor.
- La contraseña por defecto del dispositivo si los comandos SMS la requieren (el ejemplo público usa 0000).
- Cobertura de red móvil confirmada en la ubicación del dispositivo y un plan de datos activo si usa GPRS.
- Una forma de recibir o monitorear las respuestas del dispositivo (por ejemplo mediante respuestas SMS) para confirmar que los ajustes se aplicaron.

## Cómo se conecta este rastreador a Plaspy

El TLT-2K puede configurarse para reportar posición y eventos a Plaspy enviando su telemetría al endpoint y puerto compartidos de Plaspy. Una vez aplicados APN y ajustes de servidor, el dispositivo usa la red móvil para abrir una sesión GPRS y transmitir las ubicaciones según los intervalos configurados.

- El rastreador se configura para reportar al endpoint de Plaspy (d.plaspy.com o 54.85.159.138) en el puerto 8888.
- Las actualizaciones de posición y los reportes de eventos se envían por GPRS una vez que el modo GPRS está habilitado en el dispositivo.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que el mismo servidor y puerto funcionan para los rastreadores compatibles.
- El dispositivo también puede responder a consultas por SMS para coordenadas bajo demanda y estado si las funciones SMS están habilitadas.
- Los intervalos de actualización en movimiento y en reposo son configurables para que el rastreador controle la frecuencia de reporte a Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial del fabricante o al software para el TLT-2K, habitualmente comandos SMS o la herramienta del proveedor.
2. Ingrese la dirección del servidor de Plaspy ya sea como el dominio d.plaspy.com o la IP 54.85.159.138 en la configuración de servidor del dispositivo.
3. Establezca el puerto en 8888 como el puerto compartido de Plaspy para todos los dispositivos.
4. Si el dispositivo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador o el soporte del dispositivo.
5. Configure el APN y el usuario y contraseña opcionales del APN para la SIM usando el método del fabricante.
6. Aplique o guarde la configuración y, si es necesario, reinicie el dispositivo para activar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy verificando la llegada de datos a la plataforma y confirmando actualizaciones periódicas.

## Ejemplos de comandos de configuración

El TLT-2K puede configurarse por SMS. Los comandos de ejemplo públicos abajo usan la contraseña de muestra 0000 según el ejemplo del fabricante. Conserve los marcadores cuando los reemplace por sus propios valores.

- Restauración de fábrica (paso inicial opcional)
```text
*RESET#0000##
```
- Configurar el APN del operador (reemplace los marcadores por los valores de su operador)
```text
#803#0000#[apn]#[apnu]#[apnp]#
```
  - [apn] es el APN de la red móvil. [apnu] es el usuario del APN si es requerido. [apnp] es la contraseña del APN si es requerida. Omita o deje los marcadores en blanco si su operador no los utiliza.

- Establecer el servidor GPRS a Plaspy por IP y puerto
```text
#804#0000#54.85.159.138#8888##
```
  - Este comando apunta el rastreador a Plaspy usando la IP numérica y el puerto compartido 8888.

- Establecer el intervalo de actualización en movimiento (el ejemplo usa 120 segundos)
```text
#805#0000#120#1##
```

- Establecer el intervalo de actualización en reposo (el ejemplo usa 120 segundos)
```text
#809#0000#120#1##
```

- Activar modo GPRS
```text
7100000
```

- Activar modo GPS
```text
2220000
```

Nota: Los comandos de ejemplo anteriores se publicaron como ejemplo de configuración pública. Ajuste intervalos, valores de APN y otros parámetros para que coincidan con su política de rastreo y los requisitos del operador. La respuesta del dispositivo a cada SMS depende del firmware y puede proporcionar mensajes de confirmación.

## Notas de configuración

- La configuración por SMS es un método público común para el TLT-2K; las herramientas del fabricante o el software para PC pueden ofrecer flujos alternativos.
- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y las respuestas; confirme los comandos exactos con el manual del dispositivo o el soporte del proveedor para su versión de firmware.
- Cuando un dispositivo requiere selección de transporte, UDP o TCP funcionan con Plaspy en el puerto 8888; elija según la fiabilidad de la red y la preferencia del instalador.
- Mantenga los marcadores del APN intactos hasta reemplazarlos por los valores de su operador para evitar enviar cadenas incorrectas.
- Tras aplicar los ajustes, valide la llegada de datos en Plaspy para confirmar que el dispositivo se conectó correctamente a d.plaspy.com o a 54.85.159.138 en el puerto 8888.

## Por qué usar Plaspy con esta configuración

Usar el V-SUN TLT-2K con Plaspy ofrece una forma sencilla de recopilar posiciones de vehículos, monitorear movimientos y responder a eventos desde una plataforma centralizada. Apuntar el rastreador al endpoint compartido de Plaspy simplifica el despliegue porque la plataforma detecta automáticamente el protocolo del rastreador y utiliza un único puerto para todos los dispositivos compatibles.

Para saber más sobre Plaspy y cómo recopila y muestra los datos de los dispositivos, visite https://www.plaspy.com. Para sintaxis de comandos específica del dispositivo, notas de firmware y las últimas instrucciones del fabricante, verifique los detalles en el sitio web de V-SUN http://www.v-sun.cc/ ya que los métodos y el comportamiento del firmware pueden cambiar con el tiempo.
