---
slug: /teltonika/fmb204/configuration
id: fmb204-configuration
sidebar_label: Configuration
title: Teltonika - FMB204 Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar Teltonika FMB204 con Plaspy, incluye ajustes de servidor, comando SMS y marcadores de APN
keywords:
  - Configuración Teltonika FMB204
  - Configuración FMB204 Plaspy
  - Ajustes Teltonika FMB204
  - Guía configuración rastreador GPS
  - Ajustes servidor Plaspy
  - Configuración seguimiento de flotas
  - FMB204 configuración SMS
  - Configuración dispositivo Teltonika
  - Integración plataforma GPS
  - Parámetros APN FMB204
---

# Teltonika - FMB204: Configuración

Esta página documenta el contexto público de configuración para usar el Teltonika FMB204 con Plaspy. Reúne los ajustes de servidor prácticos y un ejemplo de comando SMS que los clientes de Plaspy suelen emplear para apuntar los dispositivos Teltonika a la plataforma. Utilice esta guía para comprender qué se requiere antes de integrar el FMB204 con Plaspy y dónde colocar los valores de servidor compartidos.

Plaspy usa un único conjunto de ajustes de servidor compartidos para todos los dispositivos soportados y detecta automáticamente el protocolo del tracker. Los pasos del fabricante pueden variar según la revisión de firmware, la variante de hardware, el tipo de instalación y la herramienta de configuración que utilice. Confirme siempre los pasos específicos del dispositivo con la documentación oficial de Teltonika o con sus recursos de soporte cuando sea necesario.

## Resumen de la configuración

El objetivo del proceso de configuración es preparar el FMB204 para que envíe de forma fiable la telemetría de posición y sensores a Plaspy. En términos prácticos, esto implica proporcionar al dispositivo credenciales APN correctas, asignar el endpoint y el transporte del servidor Plaspy, y validar que la telemetría llega a la plataforma.

- Instalar una SIM activa y configurar el APN para que el dispositivo use datos móviles y alcance Plaspy.
- Configurar el dispositivo para que reporte al endpoint y puerto del servidor Plaspy, de modo que las actualizaciones de ubicación entren en la plataforma.
- Seleccionar el protocolo de transporte que el dispositivo requiera y confirmar la conectividad usando SMS o Teltonika Configurator.
- Verificar que el dispositivo aparezca en Plaspy y que reporte telemetría GPS y de sensores para mapas y alertas.
- Use el comando SMS de ejemplo más abajo para establecer rápidamente parámetros comunes, incluidos marcadores de APN y la dirección del servidor Plaspy.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for reporting

## Requisitos típicos antes de comenzar

- Una tarjeta SIM instalada y con saldo o plan de datos, y las credenciales APN correctas
- Acceso a métodos de configuración de Teltonika como comandos SMS o Teltonika Configurator
- Alimentación aplicada al FMB204 y cualquier cableado externo requerido instalado
- Conocimiento del APN, usuario APN y contraseña APN del proveedor de la SIM
- Confirmación de la versión de firmware del dispositivo y de cualquier nota de instalación del proveedor
- Acceso básico a la cuenta de Plaspy o contacto de soporte para verificar que el dispositivo aparece después de la configuración

## Cómo se conecta este tracker a Plaspy

Una vez configurado, el FMB204 utiliza su conexión celular para enviar la posición y la telemetría de sensores al endpoint y puerto del servidor Plaspy. Plaspy recibe estos paquetes, detecta automáticamente el protocolo del dispositivo y normaliza los datos para visibilidad y alertas.

- El dispositivo envía los reportes de posición GPS al servidor Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse en UDP o TCP según el requisito del dispositivo y las condiciones de red
- Los datos de sensores BLE y el estado del dispositivo se incluyen en la telemetría si el equipo está configurado para reenviar esos registros
- Plaspy detecta el protocolo automáticamente, por lo que el servidor acepta paquetes compatibles sin cambiar el puerto por dispositivo
- Una vez reportando, Plaspy ofrece mapas en tiempo real, alertas de eventos y almacenamiento histórico de telemetría

## Flujo típico de configuración

1. Acceda al método de configuración oficial de Teltonika que prefiera, como Teltonika Configurator o la interfaz de comandos SMS.
2. Asegúrese de que el dispositivo tenga una SIM funcional y configure las credenciales APN de su operador móvil.
3. Introduzca d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 como la dirección del servidor del dispositivo.
4. Ajuste el puerto del servidor a 8888 ya que Plaspy utiliza el mismo puerto para todos los dispositivos.
5. Seleccione UDP o TCP si el dispositivo requiere una selección explícita del transporte.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta del fabricante o el firmware lo requieren.
7. Verifique que el dispositivo informe a Plaspy y que la ubicación y los datos de sensores aparezcan en la plataforma.

## Comandos de configuración de ejemplo

Para configurar parámetros básicos en dispositivos Teltonika vía SMS, el siguiente formato de comando público se usa comúnmente. Reemplace los marcadores de APN con los valores de su operador antes de enviar.

- Explicación de los marcadores
  - [apn] es el nombre del APN proporcionado por su operador móvil
  - [apnu] es el usuario APN si el operador lo requiere
  - [apnp] es la contraseña APN si el operador la requiere

FMB204 ejemplo de comando SMS:

```
setparam 2001:[apn];2002:[apnu];2003:[apnp];2004:d.plaspy.com;2005:8888;2006:1
```

- 2001  Marcador de APN
- 2002  Marcador de usuario APN
- 2003  Marcador de contraseña APN
- 2004  Dominio del servidor establecido en d.plaspy.com
- 2005  Puerto del servidor establecido en 8888
- 2006  Indicador de transporte o índice de perfil según el firmware del dispositivo

Envíe este SMS desde un número autorizado o use Teltonika Configurator para aplicar ajustes equivalentes. Reemplace los marcadores por valores reales antes de enviar.

## Notas de configuración

- Las versiones de firmware y las herramientas configurator de Teltonika pueden diferir en los IDs de parámetros o en el comportamiento de los indicadores de transporte; confirme la documentación de parámetros para su versión de firmware.
- Usar UDP puede reducir la latencia, pero TCP ofrece garantías de entrega; elija según su entorno de red y las recomendaciones de Teltonika.
- Plaspy detecta automáticamente el protocolo del tracker, por lo que solo necesita apuntar el dispositivo a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El método SMS setparam es conveniente para dispositivos remotos, pero asegúrese de que el número de teléfono origen esté permitido en las listas de acceso del dispositivo.
- Siempre pruebe con un solo dispositivo primero para verificar APN, servidor y ajustes de transporte antes de un despliegue masivo.

## Por qué usar Plaspy con esta configuración

Configurar el Teltonika FMB204 para reportar a Plaspy ofrece a las organizaciones una forma práctica de combinar el rastreo robusto de activos con la monitorización centralizada. Los ajustes de servidor compartidos de Plaspy simplifican el despliegue en muchos dispositivos y permiten que Plaspy detecte automáticamente los protocolos soportados, de modo que usted pueda concentrarse en la telemetría y las alertas en lugar de gestionar endpoints por dispositivo.

Para saber más sobre Plaspy y las capacidades de la plataforma visite https://www.plaspy.com. Para las opciones de configuración específicas del dispositivo, notas de firmware y referencias de parámetros consulte la documentación oficial de Teltonika en https://www.teltonika-gps.com/ para asegurar que los ajustes coincidan con el firmware y los requisitos de instalación de su dispositivo.
