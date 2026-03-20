---
slug: /concox/eg02_intelligent_motorbike_tracker/configuration
id: eg02_intelligent_motorbike_tracker-configuration
sidebar_label: Configuration
title: Concox - EG02 Intelligent Motorbike Tracker Configuration
sidebar_class_name: menu_item_tracker
description: Configure el Concox EG02 para enviar datos a Plaspy, con ajustes de servidor, comandos SMS y pasos de verificación para un monitoreo fiable de flotas
keywords:
  - Configuración Concox EG02
  - Configuración rastreador EG02
  - Concox EG02 Plaspy
  - Configuración servidor EG02
  - Configuración rastreador para motocicleta
  - Guía configuración rastreador GPS
  - Configuración dispositivo Plaspy
  - Comandos SMS EG02
  - Seguimiento micromovilidad
  - Configuración rastreador de flotas
---

# Concox - Configuración del rastreador inteligente EG02 para motocicletas

Esta página resume la información pública de configuración que puede usar para preparar un Concox EG02 Intelligent Motorbike Tracker para integrarlo con Plaspy. Se enfoca en los ajustes de servidor compartidos, pasos prácticos de instalación y los comandos SMS publicados para dispositivos EG02, de modo que pueda dirigir los datos a Plaspy para seguimiento en vivo y reporte de eventos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando este se conecta. Los pasos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que trate los comandos y el flujo de trabajo que siguen como orientación pública y confirme cualquier detalle específico del dispositivo con la documentación oficial de Concox.

## Resumen de la configuración

El objetivo de este proceso es lograr que el EG02 envíe su telemetría GNSS, LBS y de eventos a Plaspy, de modo que el dispositivo aparezca en su cuenta de Plaspy y proporcione actualizaciones y alertas en tiempo real. El EG02 soporta comandos de configuración por SMS, que muchos instaladores usan para una configuración remota sencilla sin conectar a una PC.

- Configure el rastreador para que apunte al endpoint del servidor de Plaspy y así reenvíe la telemetría a la plataforma.
- Ajuste el APN y el modo GPRS para que el dispositivo pueda usar datos móviles y alcanzar a Plaspy.
- Seleccione el transporte y el puerto para cumplir con los requisitos de Plaspy y guarde esos parámetros en el dispositivo.
- Verifique la conectividad y utilice el comando de verificación proporcionado para comprobar los parámetros activos.
- Asegúrese de que el intervalo de reporte sea apropiado para sus necesidades de flota y cumpla con los planes de datos del operador.

## Ajustes del servidor de Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP on port 8888; the device may be configured using either UDP or TCP  
- Plaspy automáticamente detecta el protocolo del rastreador cuando el dispositivo se conecta  
- Tenga en cuenta que Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados

## Requisitos habituales antes de la configuración

- Dispositivo con alimentación y accesible para recibir comandos SMS o para usar la herramienta del fabricante  
- Micro SIM activa con plan de datos y credenciales APN correctas para la red del operador  
- Capacidad para enviar SMS desde un número de teléfono permitido por el dispositivo (la configuración por SMS está soportada)  
- Acceso a las instrucciones o software oficiales de Concox para opciones avanzadas o pasos específicos de firmware  
- Información básica sobre el intervalo de reporte deseado y cualquier comportamiento de geocerca o alarma que se desee configurar tras confirmar la conectividad

## Cómo se conecta este rastreador a Plaspy

El EG02 se configura para abrir una conexión GPRS hacia el endpoint del servidor de Plaspy y enviar mensajes regulares de ubicación y eventos. Plaspy recibe esos mensajes y los pone a disposición en el panel para monitoreo, alertas y reproducción histórica.

- El rastreador apunta al dominio o IP del servidor de Plaspy y utiliza el puerto 8888 para la telemetría saliente  
- El transporte de datos puede ser TCP o UDP según la configuración del dispositivo y las condiciones de red  
- Plaspy recibe posiciones basadas en GNSS y LBS además de eventos y alarmas para visibilidad en la plataforma  
- El intervalo de reporte controla la frecuencia con la que el EG02 envía actualizaciones al endpoint de Plaspy  
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar los datos entrantes sin necesidad de seleccionar manualmente el protocolo por dispositivo

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Concox para la versión de su dispositivo, normalmente comandos SMS o una herramienta de configuración de Concox según lo documentado por el fabricante.  
2. Introduzca la dirección del servidor de Plaspy enviando o configurando d.plaspy.com o 54.85.159.138 como el SERVER objetivo.  
3. Ajuste el puerto del servidor a 8888 en los parámetros del rastreador. Plaspy usa el mismo puerto para todos los dispositivos soportados.  
4. Elija UDP o TCP como transporte si el dispositivo requiere una selección explícita. El EG02 puede configurarse para usar cualquiera de los dos.  
5. Configure los parámetros APN para que el rastreador establezca conexión GPRS y luego habilite el modo GPRS en el dispositivo.  
6. Aplique o guarde la configuración y reinicie el rastreador si el dispositivo o el firmware lo requieren.  
7. Valide que el dispositivo reporta a Plaspy verificando el estado en la plataforma y usando el comando de verificación del dispositivo cuando esté disponible.

## Comandos de configuración de ejemplo

El EG02 soporta configuración vía SMS. A continuación se muestran los comandos SMS públicos y el orden recomendado. Envíe cada comando como un SMS al número de la SIM del rastreador. Mantenga los marcadores de parámetro exactamente como aparecen.

1. Paso opcional de restauración de fábrica cuando sea necesario para configuración inicial o para limpiar ajustes previos
```
FACTORY#
```

2. Establecer la zona horaria a UTC 0
```
GMT,E,0#
```

3. Configurar el APN del operador móvil
```
APN,{{apn}}# 
```
Si su operador requiere usuario y contraseña de APN, inclúyalos como valores adicionales separados por comas:
```
APN,{{apn}},{{apnu}},{{apnp}}#
```
- {{apn}} es el APN del operador
- {{apnu}} es el usuario del APN si es requerido
- {{apnp}} es la contraseña del APN si es requerida

4. Establecer el servidor GPRS al dominio de Plaspy en el puerto 8888
```
SERVER,1,d.plaspy.com,8888,0#
```
O establecer el servidor GPRS a la IP de Plaspy en el puerto 8888
```
SERVER,0,54.85.159.138,8888,0#
```

5. Fijar el intervalo de actualización cada 60 segundos
```
TIMER,60#
```
O una forma alternativa aceptada por algunos firmwares
```
TIMER,60,60#
```

6. Habilitar el modo GPRS para que el dispositivo use datos para reportar
```
GPRSON,1#
```

7. Para comprobar los parámetros actuales de GPRS y servidor en el dispositivo utilice el comando de verificación
```
GPRSSET#
```

Envíe los comandos en el orden anterior cuando el orden sea importante; por ejemplo, configure el APN antes de habilitar GPRS y establezca SERVER antes de activar el reporte si es posible. Si usa la restauración de fábrica opcional, hágalo solo cuando sea necesario.

## Notas de configuración

- La configuración por SMS es compatible y se usa con frecuencia para configuraciones remotas, pero pueden existir herramientas del fabricante o software de PC para aprovisionamiento masivo. Use el método que coincida con su flujo de trabajo.  
- Las versiones de firmware y las revisiones de hardware pueden cambiar el formato de comandos o los parámetros soportados. Confirme la sintaxis exacta con la documentación de Concox para su versión de dispositivo.  
- Elija TCP o UDP según el comportamiento de la red y las recomendaciones del operador. Plaspy acepta ambos transportes y detecta el protocolo automáticamente al recibir datos.  
- El servidor de Plaspy utiliza un único puerto compartido 8888 para todos los dispositivos, por lo que asegúrese de configurar ese puerto exactamente como se indica.  
- Tenga las credenciales APN a la mano antes de comenzar la configuración y verifique que la SIM tenga datos habilitados y saldo suficiente para las pruebas iniciales.

## Por qué usar Plaspy con esta configuración

Configurar el Concox EG02 para reportar a Plaspy permite a los operadores centralizar la telemetría de ubicación, alarmas y estado para flotas de micromovilidad y vehículos ligeros. Con el EG02 enviando posiciones GNSS y LBS y alertas de eventos a Plaspy, los responsables de flota pueden monitorear la actividad en tiempo real, reaccionar ante robos o incidentes de seguridad y revisar el historial de movimientos para planificación operativa y mantenimiento.

Para saber más sobre Plaspy y cómo se integra con dispositivos como el Concox EG02 visite https://www.plaspy.com. Para los detalles específicos más recientes sobre configuración del dispositivo, sintaxis de comandos y comportamiento de firmware consulte la documentación oficial de Concox en https://www.iconcox.com/ .
