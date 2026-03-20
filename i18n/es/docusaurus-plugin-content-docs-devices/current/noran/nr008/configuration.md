---
slug: /noran/nr008/configuration
id: nr008-configuration
sidebar_label: Configuration
title: Noran - NR008 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Noran NR008 con Plaspy, incluye ajustes SMS y GPRS y comandos de ejemplo
keywords:
  - configuración Noran NR008
  - configuración NR008 Plaspy
  - configuración rastreador GPS Noran
  - configuración servidor NR008
  - configuración GPRS NR008
  - comandos SMS Noran NR008
  - integración NR008 Plaspy
  - guía instalación rastreador Noran
  - seguimiento flotas NR008
  - configuración dispositivo Plaspy
---

# Noran - Configuración NR008

Esta página describe el contexto público de configuración necesario para usar el rastreador Noran NR008 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, detalla el flujo práctico de puesta en marcha del NR008 y muestra comandos SMS/GPRS de ejemplo que se usan comúnmente para preparar el equipo para reportar a Plaspy. El NR008 admite configuración por SMS y GPRS y utiliza un módulo SIMCOM GSM/GPRS para la entrega de telemetría; los comandos de ejemplo reflejan el estilo de SMS que publica el fabricante y la contraseña por defecto del dispositivo cuando se indica.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando recibe telemetría. Los pasos concretos desde la perspectiva del fabricante, las herramientas de configuración disponibles y las ubicaciones de menú pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor. Use las indicaciones siguientes para preparar el equipo para Plaspy y consulte la documentación oficial de Noran para detalles específicos del dispositivo.

## Resumen de configuración

El objetivo de este proceso es dejar el NR008 listo para comunicarse de forma fiable con la plataforma Plaspy, de modo que la ubicación, las alertas y los comandos remotos se transmitan correctamente a su cuenta. Los comandos de uso público para el NR008 permiten configurar el APN del operador, apuntar el dispositivo a los endpoints de servidor de Plaspy, cambiar el dispositivo a modo GPRS y verificar la configuración actual.

- Apuntar el NR008 al servidor de Plaspy para que la telemetría GPRS sea dirigida a la plataforma.
- Configurar el APN del operador y el modo GPRS para que el dispositivo pueda acceder a Internet.
- Verificar la identidad y la configuración del equipo con el comando de estado del NR008 antes de registrarlo en Plaspy.
- Comprobar que el rastreador aparece en Plaspy y que la telemetría y los eventos se reciben correctamente.
- Utilizar comandos SMS cuando no sea posible una configuración directa por software o USB en sitio.

## Ajustes del servidor de Plaspy

- Dominio del servidor: d.plaspy.com
- IP del servidor: 54.85.159.138
- Puerto: 8888
- Transporte: soporte para UDP o TCP en el puerto 8888; elija el transporte que requiera el dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando llega telemetría

Nota: Todos los dispositivos en Plaspy usan el mismo puerto, por lo que debe configurar el NR008 para que reporte al puerto 8888 del servidor indicado arriba.

## Requisitos típicos antes de la instalación

- Conexión de alimentación del vehículo válida o batería cargada según lo requiera la instalación del NR008.
- Una tarjeta SIM operativa con datos habilitados y los valores de APN correctos proporcionados por su operador móvil.
- Acceso a un teléfono capaz de enviar SMS al rastreador o a la herramienta de configuración del fabricante si está disponible.
- Conocimiento de la contraseña del dispositivo para la configuración vía SMS (en los ejemplos públicos se usa la contraseña por defecto 000000).
- Cobertura GSM/GPRS estable en el lugar de instalación.
- Acceso al manual del fabricante o a la guía de instalación del proveedor para el cableado y la configuración de periféricos.

## Cómo se conecta este rastreador a Plaspy

El NR008 envía datos de ubicación y eventos a Plaspy bien por datos GPRS o por SMS, según la configuración y la conectividad disponible. Una vez configurado con el endpoint y puerto del servidor Plaspy, el dispositivo abrirá una conexión GPRS hacia el endpoint compartido y la plataforma ingerirá la telemetría para visualización, alertas e informes.

- El rastreador se configura para enviar telemetría al dominio o IP y puerto del servidor Plaspy.
- La telemetría y las alarmas (SOS, geocerca, exceso de velocidad, movimiento) se reenvían a Plaspy para generar notificaciones.
- Plaspy recibe los mensajes del dispositivo y detecta automáticamente el protocolo empleado por el NR008.
- Se pueden emitir comandos remotos y funciones de inmovilizador vía SMS o por el canal GPRS, según el flujo de servidor configurado.
- Una configuración correcta permite que el dispositivo aparezca en Plaspy para monitoreo en tiempo real y consulta de historial.

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Noran para el NR008 (comandos SMS o software del proveedor) tal como lo entregue el fabricante o el distribuidor.
2. Prepare el equipo con una SIM activa, confirme el APN y asegúrese de que el dispositivo tenga energía.
3. Ingrese la dirección del servidor de Plaspy en la configuración del equipo como d.plaspy.com o 54.85.159.138.
4. Establezca el puerto del servidor en 8888; seleccione UDP o TCP si el dispositivo pide elegir el transporte.
5. Aplique o guarde la configuración en el rastreador (mediante confirmación por SMS o por la herramienta del proveedor).
6. Reinicie el dispositivo si el firmware lo requiere para aplicar los cambios de GPRS.
7. Valide que el equipo informa a Plaspy verificando la llegada de telemetría y usando el comando de estado del NR008 para confirmar servidor y estado de conexión GPRS.

## Ejemplos de comandos de configuración

El NR008 se puede configurar enviando mensajes SMS al dispositivo. Los comandos de ejemplo públicos que aparecen a continuación usan la contraseña del equipo 000000 por defecto. Reemplace [apn] y los marcadores opcionales por los valores de su operador. Mantenga el campo de contraseña del dispositivo y cámbielo si ya modificó la contraseña por defecto.

1. Ajustar el APN del operador
Envíe un SMS con el siguiente formato. Reemplace [apn] con el APN de su operador. Si su operador requiere usuario y contraseña para el APN incluya [apnu] y [apnp] como se muestra.

```
A000000,012,[apn]
```

Variante opcional con usuario y contraseña del APN:

```
A000000,012,[apn],[apnu],[apnp]
```

2. Configurar el servidor GPRS (apuntar el dispositivo a Plaspy)
Envíe un SMS usando la contraseña del dispositivo y la IP y puerto del servidor Plaspy:

```
A000000,010,54.85.159.138,8888
```

Puede reemplazar la IP por el dominio del servidor cuando su equipo acepte nombres de dominio:

```
A000000,010,d.plaspy.com,8888
```

3. Cambiar el rastreador a modo GPRS
Active el reporte de datos GPRS con este comando:

```
A000000,011,1
```

4. Comprobar la configuración actual y el estado del dispositivo
Use el comando de verificación/estado para leer información del equipo como Id del dispositivo, APN, servidor, puerto, estado GPRS, estado de conexión GPRS y señal GSM:

```
A000000,004
```

Notas sobre marcadores e identificadores:
- 000000 es la contraseña pública por defecto en este ejemplo. Si cambió la contraseña del dispositivo, reemplace 000000 por su contraseña en todos los comandos.
- [apn] debe reemplazarse por la cadena APN proporcionada por su operador móvil.
- [apnu] y [apnp] son opcionales y representan el usuario y la contraseña del APN cuando el operador los requiere.
- Para obtener el Id del dispositivo después de una comprobación de estado, busque la primera palabra que comience con NR en el mensaje de respuesta.

## Notas de configuración

- Las variaciones de firmware y región pueden cambiar la sintaxis de los comandos o los parámetros disponibles; verifique los formatos de comando frente a la documentación del firmware instalado.
- El NR008 soporta configuración por SMS en los ejemplos públicos; utilice SMS cuando no exista una interfaz de software directa.
- Elija TCP o UDP según las necesidades de su instalación; ambos transportes son compatibles en el puerto 8888, pero el comportamiento del dispositivo puede variar por firmware.
- Confirme el APN, usuario y contraseña con su operador móvil antes de enviar SMS de configuración del APN.
- Mantenga un registro de la contraseña del dispositivo cuando la cambie; la pérdida de la contraseña complica la configuración remota.

## Por qué usar Plaspy con esta configuración

Configurar un NR008 para que reporte a Plaspy ofrece visibilidad centralizada de la ubicación del vehículo, las alarmas y los eventos operativos. Para gestores de flotas, esta integración facilita las notificaciones, los informes históricos y los flujos de control remoto como inmovilización o gestión de SOS al encaminar la telemetría del NR008 hacia Plaspy para monitoreo en mapas y notificaciones basadas en reglas.

Para obtener más información sobre Plaspy y cómo la plataforma puede gestionar la telemetría y los flujos de flota del NR008 visite https://www.plaspy.com. Verifique siempre los pasos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante en el sitio de Noran http://www.norantracker.com/ ya que las especificaciones y formatos de comandos pueden cambiar con el tiempo.
