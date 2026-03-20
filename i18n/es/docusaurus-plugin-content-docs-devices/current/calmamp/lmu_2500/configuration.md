---
slug: /calmamp/lmu_2500/configuration
id: lmu_2500-configuration
sidebar_label: Configuration
title: CalmAmp - LMU-2500 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del CalmAmp LMU-2500 para conexión con Plaspy
keywords:
  - configuración CalmAmp LMU-2500
  - instalación CalmAmp LMU-2500
  - configuración LMU-2500 Plaspy
  - configuración rastreador CalmAmp
  - configuración servidor LMU-2500
  - configuración rastreador Plaspy
  - configuración GPS CalmAmp
  - configuración SMS LMU-2500
  - seguimiento de flotas LMU-2500
  - configuración rastreador GPS Plaspy
---

# CalmAmp - Configuración LMU-2500

Esta página explica la configuración pública necesaria para conectar el rastreador CalmAmp LMU-2500 con la plataforma Plaspy. Describe los ajustes de servidor compartido que Plaspy requiere, el flujo general de configuración y los comandos SMS públicos que CalmAmp ofrece para ajustar parámetros de red y servidor cuando corresponda.

Plaspy utiliza un único servidor compartido y puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos de configuración en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y las herramientas del proveedor, por lo que utilice esta guía junto con la documentación del fabricante y sus procedimientos de instalación.

## Resumen de configuración

El proceso de configuración del LMU-2500 prepara el dispositivo para comunicarse con Plaspy configurando el acceso a la red móvil, el servidor de Plaspy y el transporte y puerto correctos. Cuando estos elementos están bien configurados, el rastreador puede enviar datos de ubicación y eventos a Plaspy, donde serán visibles para sus flujos de gestión de flota.

- Configure el APN y las credenciales para que el dispositivo pueda usar datos GPRS y acceder a Internet.
- Apunte el dispositivo al servidor de Plaspy para que la información se envíe al servicio de Plaspy.
- Establezca el puerto compartido usado por Plaspy y seleccione el tipo de transporte si el dispositivo lo requiere.
- Reinicie o reinicie el rastreador si es necesario para aplicar los ajustes de red y servidor.
- Verifique la configuración y la conectividad usando el comando de verificación del dispositivo o una herramienta de diagnóstico del fabricante.

## Configuración del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

Estos son los valores públicos del endpoint de Plaspy que debe usar al configurar el LMU-2500 para conectarse a Plaspy.

## Requisitos típicos antes de la configuración

- Una SIM activa con datos móviles y capacidad de SMS insertada en el rastreador si va a usar configuración por SMS o GPRS.
- Acceso al método de configuración del fabricante para el LMU-2500, como comandos SMS o una herramienta del proveedor.
- APN, usuario APN y contraseña APN del operador celular si la SIM los requiere.
- Conocimiento del ID del dispositivo o del MID que devuelve el comando de verificación para que los comandos SMS sean aceptados.
- Un plan para la instalación y alimentación del dispositivo, incluyendo cualquier batería de respaldo o consideraciones de modo de reposo descritas por el fabricante.

## Cómo se conecta este rastreador a Plaspy

El LMU-2500 se configura para enviar datos GPS y telemetría al servidor y puerto compartido de Plaspy, de modo que los administradores de flota puedan ver la ubicación y el estado del vehículo en Plaspy. El rastreador utiliza la conectividad de datos móviles para abrir una sesión con el servidor de Plaspy y enviar actualizaciones periódicas o eventos.

- El rastreador se configura con el APN del operador y las credenciales necesarias para establecer conectividad de datos GPRS.
- El dispositivo se apunta al dominio o a la IP del servidor Plaspy y al puerto compartido de Plaspy.
- El rastreador usa transporte UDP o TCP para enviar mensajes a Plaspy en el puerto configurado.
- Plaspy recibe la conexión entrante y detecta y maneja automáticamente el protocolo del rastreador.
- Una vez conectado, las actualizaciones de ubicación y los eventos de estado se muestran en la plataforma Plaspy para su monitoreo.

## Flujo de configuración común

1. Acceda al método oficial de configuración CalmAmp para el LMU-2500 (por ejemplo, comandos basados en SMS o software del fabricante).
2. Introduzca el servidor de Plaspy por nombre d.plaspy.com o por IP 54.85.159.138 en el campo correspondiente.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP si el dispositivo requiere selección de transporte.
5. Configure el APN del operador y las credenciales necesarias para que el dispositivo use datos GPRS.
6. Aplique o guarde la configuración y reinicie el dispositivo si es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo informe a Plaspy comprobando el estado en la plataforma o utilizando el comando de verificación del equipo.

## Comandos de configuración de ejemplo

El CalmAmp LMU-2500 puede configurarse mediante comandos SMS. La secuencia que sigue es el conjunto público de comandos SMS usados para ajustar APN, credenciales APN, el servidor GPRS y el puerto del servidor, seguido de un reinicio para aplicar los ajustes. El dispositivo responderá al comando de verificación con un MID que se usa como ID de mensaje en comandos SMS posteriores.

Nota sobre IDs y verificación
- El ID requerido para algunos flujos SMS es el MID de 10 dígitos que devuelve el dispositivo cuando lo consulta con el comando de verificación.
- El comando de verificación/consulta se muestra más abajo.

1. Configurar el APN del operador
```
!RP,2306,0,{{apn}}
```
- Reemplace el marcador {{apn}} por la cadena APN de su operador móvil.

2. Configurar el nombre de usuario del APN (si se requiere)
```
!RP,2314,0,{{apnu}}
```
- Reemplace {{apnu}} por el usuario APN si su operador lo exige.

3. Configurar la contraseña del APN (si se requiere)
```
!RP,2315,0,{{apnp}}
```
- Reemplace {{apnp}} por la contraseña del APN si su operador lo exige.

4. Apuntar el servidor GPRS a Plaspy por IP
```
!RP,2319,0,54.85.159.138
```
- Alternativamente puede apuntar el dispositivo a d.plaspy.com si el equipo acepta nombres de host.

5. Establecer el puerto del servidor al puerto compartido de Plaspy
```
!RP,769,0,8888
```

6. Reiniciar el rastreador para aplicar los ajustes
```
!R3,70,0
```
- Generalmente se requiere reiniciar para aplicar cambios en parámetros de red y servidor. Considere esto obligatorio en la configuración inicial.

Comando de verificación para comprobar la configuración
```
!RO
```
- Use este comando para consultar el dispositivo y confirmar los parámetros configurados. El rastreador responderá con el estado e incluirá el MID u otros identificadores.

Importante: Mantenga el orden anterior al aplicar los ajustes por SMS cuando el orden sea importante. Reemplace los marcadores como {{apn}}, {{apnu}} y {{apnp}} por los valores de su operador.

## Notas de configuración

- El flujo de configuración por SMS mostrado es la secuencia pública proporcionada para dispositivos LMU-2500; algunas instalaciones usan software del fabricante o herramientas de campo en lugar de SMS.
- Las versiones de firmware y las revisiones de hardware pueden cambiar nombres de parámetros o el comportamiento de los comandos; confirme el soporte de comandos en la versión de firmware de su dispositivo.
- Elija UDP o TCP según la preferencia del instalador y el comportamiento de la red; Plaspy soporta ambos transportes en el puerto compartido y detecta automáticamente el protocolo del rastreador.
- APN, usuario y contraseña correctos son necesarios para la conectividad de datos GPRS; verifique estos datos con su operador móvil.
- Después de aplicar la configuración, siempre verifique que el dispositivo informe a Plaspy y compruebe la conectividad en la plataforma.

## Por qué usar Plaspy con esta configuración

Configurar el CalmAmp LMU-2500 para reportar a Plaspy ofrece a los operadores de flota un punto centralizado y consistente para la ubicación y la telemetría del dispositivo. Usar el servidor y puerto compartido de Plaspy simplifica el despliegue en flotas mixtas y permite que Plaspy detecte automáticamente el protocolo del rastreador cuando el dispositivo se conecta.

Para obtener más información sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que verifique la información más reciente en el sitio de CalmAmp http://www.calamp.com/ antes de finalizar el despliegue.
