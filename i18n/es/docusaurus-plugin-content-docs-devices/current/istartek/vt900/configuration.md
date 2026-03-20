---
slug: /istartek/vt900/configuration
id: vt900-configuration
sidebar_label: Configuration
title: iStartek - VT900 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador iStartek VT900 con Plaspy usando servidor compartido y comandos SMS o GPRS
keywords:
  - configuración iStartek VT900
  - configuración iStartek VT900 para Plaspy
  - configuración rastreador GPS VT900
  - configuración servidor VT900
  - configuración SMS VT900
  - configuración rastreador Plaspy
  - configuración GPRS VT900
  - rastreo de vehículos VT900
  - rastreo de flotas iStartek
  - ajustes de protocolo VT900
---

# iStartek - VT900 Configuración

Esta página describe la configuración pública necesaria para usar el rastreador GPS iStartek VT900 con Plaspy. Reúne los ajustes prácticos y los comandos de ejemplo disponibles públicamente que permiten al VT900 enviar datos de ubicación y estado a la plataforma Plaspy por SMS o GPRS, de modo que usted pueda validar la conectividad y la visibilidad en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use la información aquí para preparar el VT900 para la conexión a Plaspy y confirme los detalles específicos del equipo en la documentación de iStartek.

## Resumen de la configuración

Este proceso prepara al VT900 para reportar su posición y eventos a la plataforma de seguimiento Plaspy usando el endpoint y puerto compartido de la plataforma. Los pasos suelen ajustar la zona horaria del dispositivo, el APN para datos móviles, el destino del servidor GPRS, el intervalo de reporte y ofrecen un comando de verificación para confirmar los parámetros.

- Configure el APN de la red para que el rastreador use GPRS para enviar datos.
- Apunte el VT900 al servidor de Plaspy usando el dominio público o la IP y el puerto compartido.
- Seleccione UDP o TCP según sea necesario y guarde los ajustes en el equipo.
- Establezca un intervalo de reporte adecuado a sus necesidades de monitoreo y perfil de energía.
- Verifique los parámetros actuales y confirme que el dispositivo comienza a reportar a Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP; el dispositivo puede configurarse para usar cualquiera de los dos en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Un VT900 con alimentación y una tarjeta SIM activa capaz de usar SMS y GPRS según lo requiera la instalación
- Conocimiento de los ajustes APN del operador móvil correspondiente a la SIM instalada
- Acceso al método de configuración del fabricante para el VT900, como comandos SMS o el software del proveedor
- Capacidad básica para enviar comandos SMS desde un teléfono al rastreador si va a configurar por SMS
- Un plan para un intervalo de reporte adecuado en función de la frecuencia de seguimiento y las limitaciones de batería o energía

## Cómo se conecta este rastreador a Plaspy

El VT900 puede configurarse para enviar datos a Plaspy estableciendo su destino de servidor GPRS al dominio o IP de Plaspy y usando el puerto compartido para todos los dispositivos. Una vez configurado, el rastreador transmitirá datos de posición y mensajes de evento al endpoint de Plaspy, donde la plataforma detecta y analiza automáticamente el protocolo del dispositivo.

- El rastreador envía actualizaciones periódicas de ubicación a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Plaspy acepta conexiones por UDP o TCP y detecta automáticamente el protocolo del dispositivo
- Los reportes del VT900 aparecen en Plaspy después de que el dispositivo se registre correctamente y envíe los primeros paquetes
- El reporte de eventos como SOS, geocerca, movimiento y alertas se reenvía a Plaspy cuando están habilitados en el dispositivo
- La validación de conectividad se puede realizar revisando la respuesta a comandos de parámetros y observando los mensajes entrantes en Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración de iStartek para el VT900, por ejemplo comandos SMS o el software del fabricante proporcionado con el equipo.
2. Ajuste la zona horaria del dispositivo y el reloj local según sea necesario para obtener marcas de tiempo precisas.
3. Ingrese d.plaspy.com o 54.85.159.138 como host del servidor GPRS en la configuración del equipo.
4. Establezca el puerto del servidor en 8888 y elija UDP o TCP si el rastreador requiere selección de transporte.
5. Configure el APN del operador para que el rastreador pueda usar GPRS en el envío de datos.
6. Aplique o guarde la configuración y reinicie el equipo si el fabricante lo requiere.
7. Valide que el dispositivo reporte a Plaspy comprobando la respuesta a parámetros y confirmando mensajes entrantes visibles en la plataforma Plaspy.

## Comandos de configuración de ejemplo

El VT900 soporta configuración vía SMS. A continuación están los comandos SMS públicos que se usan comúnmente para preparar el dispositivo para su uso con Plaspy. Conserve los marcadores de posición al enviar los comandos.

- Comando opcional de reinicio a fábrica
```text
FACTORY#
```

- Ajustar la zona horaria a UTC 0
```text
GMT,E,0#
```

- Establecer el APN del operador para acceso GPRS
```text
APN,[apn],[apnu],[apnp]#
```
Explicación: [apn] es el APN del operador móvil. [apnu] y [apnp] son marcadores de posición opcionales para usuario y contraseña del APN. Si su APN no requiere usuario ni contraseña, puede enviar solo APN,[apn]#.

- Configurar el servidor GPRS a Plaspy usando dominio y puerto
```text
SERVER,1,d.plaspy.com,8888#
```

- O configurar el servidor GPRS a Plaspy usando IP y puerto
```text
SERVER,0,54.85.159.138,8888#
```

- Establecer el intervalo de actualización periódico a 60 segundos
```text
TIMER,60#
```

- Verificar parámetros actuales del dispositivo
```text
PARAM#
```

Nota: Envíe cada comando como un SMS independiente al VT900 según el formato de comandos SMS del fabricante. El orden anterior es práctico para la configuración inicial, y FACTORY# debe usarse solo cuando necesite restaurar los valores de fábrica del dispositivo.

## Notas sobre la configuración

- El VT900 admite métodos de configuración por SMS y GPRS; el SMS es común para ajustes en campo y se refleja en los comandos de ejemplo.
- Diferentes versiones de firmware o revisiones de hardware pueden aceptar formatos SMS o parámetros ligeramente distintos. Confirme la sintaxis exacta con la documentación de iStartek para su versión de firmware.
- Elija TCP o UDP según las necesidades del despliegue; Plaspy acepta ambos y detectará el protocolo automáticamente.
- Plaspy usa el puerto 8888 para todos los dispositivos, por lo que la configuración del puerto del servidor es la misma en los rastreadores compatibles.
- Si cambia las credenciales del APN, confirme la conectividad enviando PARAM# y observando actualizaciones en línea en Plaspy.

## Por qué usar Plaspy con esta configuración

Usar el iStartek VT900 con Plaspy ofrece una forma práctica de centralizar los datos de ubicación de vehículos y activos en una sola plataforma que reconoce automáticamente el protocolo del rastreador. Los ajustes compartidos del servidor de Plaspy simplifican la incorporación de dispositivos, ya que el mismo puerto y endpoint se usan en los equipos compatibles, reduciendo la complejidad de configuración por unidad.

Si desea conocer más sobre Plaspy y cómo maneja las conexiones de dispositivos, visite https://www.plaspy.com. Los pasos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, así que confirme la información de instalación más reciente con iStartek en https://istartek.com/ antes de desplegar.
