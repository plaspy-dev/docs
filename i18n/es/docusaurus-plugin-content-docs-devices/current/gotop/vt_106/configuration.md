---
slug: /gotop/vt_106/configuration
id: vt_106-configuration
sidebar_label: Configuration
title: GOTOP - VT-106 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el rastreador GOTOP VT-106 a Plaspy con ajustes de servidor y pasos prácticos de configuración
keywords:
  - Configuración GOTOP VT-106
  - Instalación GOTOP VT-106
  - Configuración de servidor GOTOP VT-106
  - GOTOP VT-106 Plaspy
  - Rastreador GPS GOTOP VT-106
  - Configuración GPRS GOTOP VT-106
  - Configuración rastreador vt 106
  - Instalación rastreador motocicleta GOTOP
  - Configuración software de rastreo
  - Configuración de dispositivo Plaspy
---

# GOTOP - VT-106 Configuración

Esta página documenta el contexto de configuración pública para usar el rastreador GPS para motocicletas GOTOP VT-106 con la plataforma Plaspy. Resume los ajustes de servidor compartidos que Plaspy requiere, describe pasos prácticos de configuración y señala qué verificar en el equipo para que el VT-106 reporte ubicación, estado y alarmas a Plaspy mediante GPRS o SMS cuando esté disponible.

Plaspy emplea ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando los datos llegan al servidor, pero los pasos exactos en el equipo pueden variar según la versión de firmware del VT-106, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El VT-106 opera en redes GSM GPRS y admite el envío de coordenadas por SMS y GPRS junto con reportes de alarmas y estado, por lo que esta guía se enfoca en los pasos prácticos necesarios para apuntar el dispositivo a Plaspy y validar la conectividad.

## Resumen de la configuración

Configurar el VT-106 para Plaspy prepara el rastreador para enviar datos de posición y estado a un punto de conexión compartido de Plaspy, de modo que el dispositivo aparezca y reporte de forma confiable en la plataforma. El proceso consiste principalmente en indicar dónde enviar los reportes GPRS (o usar SMS como método secundario), garantizar la conectividad a la red y confirmar que el rastreador está reportando a Plaspy.

- Configure el VT-106 para que reporte al endpoint y puerto del servidor Plaspy usados por todos los dispositivos.
- Asegure conectividad móvil de datos (GPRS) válida y los detalles APN necesarios para la tarjeta SIM instalada.
- Seleccione el transporte del dispositivo (UDP o TCP) si la interfaz de configuración del VT-106 exige esa elección.
- Guarde y aplique la configuración, y reinicie el rastreador si es necesario para que los nuevos ajustes entren en vigor.
- Valide que el dispositivo sea visible y esté reportando en Plaspy comprobando actualizaciones de posición recientes y eventos de alarma.

## Ajustes del servidor Plaspy

Utilice estos ajustes oficiales de Plaspy al configurar el VT-106 para que reporte a Plaspy. Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando llegan los datos.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte UDP o TCP en el puerto 8888
- Plaspy realiza detección automática del protocolo para las conexiones entrantes de rastreadores

## Requisitos típicos antes de la configuración

- Un VT-106 con alimentación conectada y accesible para configuración.
- Una tarjeta SIM instalada y activa con datos GPRS y capacidad de SMS según lo requiera su flujo de trabajo.
- Datos del APN y ajustes móviles del operador de la SIM si el dispositivo solicita configuración manual del APN.
- Acceso al método oficial de configuración GOTOP para el VT-106 (herramienta del fabricante, comandos SMS o interfaz de configuración).
- Cobertura de red en el área donde operará el vehículo para que el VT-106 alcance el servidor Plaspy vía GPRS.
- El IMEI del VT-106 o identificador de dispositivo documentado para registrar o localizar el equipo en Plaspy si es necesario.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el VT-106 transmitirá coordenadas de ubicación, estado del dispositivo y notificaciones de alarma al endpoint y puerto del servidor Plaspy para que el equipo pueda ser monitoreado en la plataforma. Plaspy aceptará la conexión entrante por UDP o TCP y mapeará los datos del dispositivo al registro correspondiente.

- El VT-106 envía paquetes GPRS al endpoint compartido de Plaspy d.plaspy.com o a 54.85.159.138 en el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador a partir del flujo de datos entrante, de modo que la plataforma puede interpretar los reportes sin necesidad de seleccionar el protocolo por dispositivo en el servidor.
- Las actualizaciones de ubicación y los reportes de alarma llegan a Plaspy y quedan visibles para monitoreo operativo e historial.
- SMS puede emplearse como canal alternativo para recibir coordenadas o para la configuración inicial cuando el VT-106 lo soporta.
- Alarmas como geocerca, batería baja, exceso de velocidad y pérdida de alimentación principal reportadas por el VT-106 se reenvían a Plaspy para generación de alertas y revisión.

## Flujo de configuración común

1. Acceda al método de configuración oficial del GOTOP VT-106 o al software provisto por el fabricante según la documentación de instalación.
2. Localice los ajustes de servidor o reporte GPRS en la interfaz de configuración del VT-106.
3. Ingrese la dirección del servidor Plaspy, ya sea como dominio d.plaspy.com o como la IP 54.85.159.138.
4. Configure el puerto de reporte en 8888.
5. Seleccione UDP o TCP como transporte si el VT-106 requiere elegir el tipo de transporte en sus ajustes.
6. Aplique o guarde la nueva configuración y reinicie el dispositivo si la documentación o el propio equipo indican que es necesario.
7. Valide que el VT-106 reporte a Plaspy comprobando actualizaciones de posición y alarmas entrantes en la plataforma Plaspy.

## Ejemplo de comandos de configuración

El fabricante del VT-106 ofrece múltiples métodos de configuración que pueden incluir herramienta de software, interfaz de comandos por SMS o configuración directa por firmware. Las cadenas de comando públicas exactas y la sintaxis dependen del firmware del VT-106 y de las herramientas del proveedor. Debido a que los formatos de comando varían entre revisiones e instaladores, consulte la documentación oficial del GOTOP VT-106 o a su proveedor para obtener los comandos SMS exactos o las instrucciones de la herramienta de configuración para indicar servidor, puerto, transporte y APN.

Si su VT-106 admite configuración por SMS, la documentación del fabricante indicará el formato preciso del comando SMS para establecer servidor y puerto. Al usar una herramienta de configuración, ingrese d.plaspy.com o 54.85.159.138 como servidor y 8888 como puerto, luego seleccione UDP o TCP según se requiera, guarde y reinicie el dispositivo según las instrucciones de la herramienta.

## Notas de configuración

- Diferentes versiones de firmware y revisiones de hardware del VT-106 pueden presentar menús de configuración o formatos de comando SMS distintos; siempre verifique los comandos según la versión que tenga.
- Plaspy admite tanto TCP como UDP; elija el transporte que mejor se adapte a los requisitos locales del dispositivo y al entorno de red. Plaspy detectará el protocolo automáticamente al recibir datos.
- El VT-106 usa la red GSM GPRS para el reporte al servidor. Asegúrese de configurar el APN correcto del operador de su SIM en el dispositivo si es necesario.
- La configuración por SMS puede estar disponible como recurso de respaldo para la puesta en marcha inicial o cuando no hay conectividad de datos, pero su formato y disponibilidad dependen del firmware del equipo.
- Mantenga un registro del IMEI del VT-106 o del identificador único del equipo para poder relacionarlo con su registro en Plaspy durante la validación.

## Por qué usar Plaspy con esta configuración

Usar el GOTOP VT-106 con Plaspy ofrece a operadores de flotas y propietarios de motocicletas una forma práctica de centralizar el reporte de ubicación, estado y alarmas desde un rastreador compacto habilitado para GPRS. Al configurar el VT-106 para que reporte al endpoint compartido de Plaspy, las organizaciones obtienen visibilidad continua de los movimientos del vehículo, recorridos históricos y alertas de eventos en una sola plataforma diseñada para el monitoreo operativo.

Para obtener más información sobre Plaspy y cómo maneja las conexiones de dispositivos y los datos de rastreo, visite https://www.plaspy.com. Para los comandos de configuración más recientes del VT-106, detalles de firmware e instrucciones del fabricante, verifique la documentación del equipo en el sitio de GOTOP https://www.gotop.cc/ ya que los pasos específicos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
