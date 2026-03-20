---
slug: /concox/gt06n/configuration
id: gt06n-configuration
sidebar_label: Configuration
title: Concox - GT06N Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del Concox GT06N para integración con Plaspy, con ajustes de servidor y ejemplos de comandos SMS
keywords:
  - configuración Concox GT06N
  - configuración Concox GT06N Plaspy
  - configuración servidor Concox GT06N
  - configuración SMS GT06N
  - configuración GPRS GT06N
  - ajustes APN GT06N
  - configuración rastreador vehicular
  - seguimiento de flotas Plaspy
  - rastreador GPS GT06N
  - manual Concox GT06N
---

# Concox - Configuración GT06N

Esta página documenta el contexto público de configuración para usar el Concox GT06N con Plaspy. Se centra en los ajustes del servidor y en los pasos prácticos que permiten al rastreador enviar ubicación y estado a Plaspy, e incluye ejemplos de comandos SMS que se usan comúnmente para habilitar el reporte por GPRS en unidades GT06N.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, pero los pasos exactos en el equipo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Use los comandos y el flujo de trabajo que se muestran a continuación como guía práctica y verifique los detalles específicos del dispositivo con la documentación de Concox cuando sea necesario.

## Resumen de configuración

Configurar un GT06N para Plaspy prepara el equipo para enviar la posición GNSS, el estado de entradas y los eventos de alarma al endpoint del servidor de Plaspy, de modo que los vehículos sean visibles y reportables dentro de la plataforma. Cuando corresponde, el dispositivo normalmente se configura mediante comandos SMS o mediante el método oficial de configuración de Concox que provea el vendedor.

- Apunte el rastreador al endpoint del servidor de Plaspy para que los datos del dispositivo se enruten a Plaspy y se habilite el seguimiento en vivo.
- Configure el APN y los parámetros GPRS para que el rastreador pueda establecer una sesión de datos celular para el reporte.
- Ajuste el intervalo de reporte y el modo GPRS para que las actualizaciones de posición lleguen con la frecuencia esperada.
- Valide la conectividad con un comando de verificación y confirme que el dispositivo aparece en Plaspy.
- Opcionalmente, restaure los valores de fábrica antes de una configuración desde cero si es necesario.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte por UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y utiliza el mismo puerto para todos los dispositivos soportados

## Requisitos típicos antes de la configuración

- Un GT06N cargado e instalado con alimentación del vehículo o alimentación de banco conectada.
- Una tarjeta SIM celular válida con datos habilitados y el APN correcto para el operador móvil.
- Acceso al método oficial de configuración de Concox o al canal de control vía SMS del dispositivo.
- Conocimiento de los ajustes del servidor Plaspy: d.plaspy.com o 54.85.159.138 y puerto 8888.
- Un plan de pruebas para verificar el reporte a Plaspy después de la configuración, incluyendo la comprobación de la visibilidad del dispositivo en la plataforma.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para reportar a Plaspy, el GT06N establece conectividad GPRS y envía mensajes de posición, estado y alarma al endpoint y puerto compartidos del servidor Plaspy. Plaspy ingiere esos mensajes y los muestra en tiempo real mientras aplica las reglas y alertas configuradas en la plataforma.

- El rastreador utiliza los ajustes GPRS/APN configurados para abrir una sesión de datos y transmitir mensajes.
- La telemetría del dispositivo y las notificaciones de eventos se envían a d.plaspy.com o directamente a 54.85.159.138 en el puerto 8888.
- Los mensajes pueden enviarse por UDP o TCP según la configuración y la selección de transporte del equipo.
- Plaspy detecta automáticamente el protocolo del dispositivo, por lo que el mismo endpoint y puerto funcionan para los modelos soportados.
- Una vez que comienza el reporte, la posición del vehículo, los estados de entradas y los eventos de alarma quedan visibles y listos para acción en Plaspy.

## Flujo de configuración recomendado

1. Acceda al método oficial de configuración de Concox o confirme el formato de comandos SMS para el firmware de su GT06N.
2. Ingrese la dirección del servidor Plaspy ya sea como dominio d.plaspy.com o como la IP 54.85.159.138 en los ajustes de servidor del dispositivo.
3. Establezca el puerto del servidor en 8888.
4. Elija UDP o TCP si el rastreador requiere selección de transporte (Plaspy admite ambos).
5. Configure el APN y habilite el modo GPRS para que el dispositivo pueda usar datos celulares para el reporte.
6. Aplique o guarde la configuración en el rastreador y reinicie el equipo si el dispositivo o el firmware lo requieren.
7. Valide que el dispositivo reporte a Plaspy comprobando la visibilidad del equipo en la plataforma y usando el comando de verificación del dispositivo.

## Ejemplos de comandos de configuración

El GT06N puede configurarse mediante comandos SMS. Los siguientes comandos públicos se presentan en el orden original como pasos comunes de configuración. Envíe cada línea como un mensaje SMS al número de la SIM del dispositivo.

1. (Opcional) Restaurar a ajustes de fábrica — use esto solo cuando necesite una configuración limpia:
```text
FACTORY#
```

2. Establecer la zona horaria a UTC+0:
```text
GMT,E,0#
```

3. Establecer el APN del operador:
```text
APN,[apn]#            (o incluya usuario y contraseña si se requieren)
APN,[apn],[apnu],[apnp]#
```
- [apn] es la cadena APN del operador móvil.
- [apnu] es el nombre de usuario APN si su operador lo solicita.
- [apnp] es la contraseña APN si su operador la requiere.

4. Configurar el servidor GPRS para apuntar a Plaspy por dominio (forma preferible y legible):
```text
SERVER,1,d.plaspy.com,8888,0#
```
O configurar el servidor GPRS usando la IP de Plaspy:
```text
SERVER,0,54.85.159.138,8888,0#
```

5. Establecer el intervalo de actualización cada 60 segundos (dos variantes comunes):
```text
TIMER,60#
```
o
```text
TIMER,60,60#
```

6. Habilitar modo GPRS:
```text
GPRSON,1#
```

7. Verificar los parámetros actuales de GPRS y servidor:
```text
GPRSSET#
```

Envíe estos comandos en el orden mostrado al configurar desde fábrica o al reconstruir la configuración. Use FACTORY# solo cuando sea necesaria una restauración completa.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis exacta de los comandos SMS o los parámetros disponibles; consulte la documentación de Concox para detalles específicos por firmware.
- El ejemplo de GT06N anterior usa configuración vía SMS y reporte por GPRS; algunas instalaciones pueden emplear las herramientas de configuración de Concox en su lugar.
- Elegir TCP o UDP afecta las características del transporte; Plaspy acepta ambos y detecta automáticamente el protocolo del dispositivo en el puerto 8888.
- Plaspy utiliza el mismo puerto para todos los dispositivos soportados y aceptará conexiones dirigidas a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Confirme siempre las credenciales APN y los requisitos del operador antes de habilitar GPRS para evitar problemas de conectividad.

## Por qué usar Plaspy con esta configuración

Usar el Concox GT06N con Plaspy ofrece una vía sencilla hacia la visibilidad de vehículos en tiempo real, alertas basadas en eventos y reproducción histórica para operaciones de flota. Con el GT06N reportando posición GNSS, estados de entradas y eventos de alarma a Plaspy, los equipos de operaciones pueden monitorear la ubicación de los vehículos, responder a incidentes como alertas SOS o cortes de alimentación, y aplicar reglas de la plataforma para una gestión eficiente del despacho y la seguridad.

Para obtener más información sobre Plaspy y cómo la plataforma ingerirá y mostrará los datos del rastreador visite https://www.plaspy.com. Los métodos de configuración de dispositivos, el comportamiento de firmware y los detalles del fabricante pueden cambiar con el tiempo; verifique la información más reciente en el sitio oficial de Concox https://www.iconcox.com/.
