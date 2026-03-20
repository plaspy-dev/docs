---
slug: /cantrack/g900ls_4g/configuration
id: g900ls_4g-configuration
sidebar_label: Configuration
title: CanTrack - G900LS-4G Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública y práctica para conectar el rastreador CanTrack G900LS-4G a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración CanTrack G900LS-4G
  - Configuración G900LS-4G Plaspy
  - Guía de configuración CanTrack
  - Configuración de servidor G900LS-4G
  - Integración de rastreador con Plaspy
  - Configuración plataforma rastreadores GPS
  - Protocolo GT06 Plaspy
  - Configuración seguimiento de vehículos
  - Configuración telemetría G900LS-4G
  - Configuración rastreador gestión de flotas
---

# CanTrack - G900LS-4G Configuración

Esta página recopila la información práctica pública para usar el rastreador CanTrack G900LS-4G con la plataforma Plaspy. Aquí encontrará los valores de servidor y el flujo de trabajo necesarios para apuntar el dispositivo a Plaspy y validar la comunicación, de modo que el rastreador pueda enviar ubicación y telemetría a su cuenta en Plaspy.

Plaspy utiliza ajustes de servidor compartidos para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión del hardware, el tipo de instalación o las herramientas del proveedor; siga el procedimiento general que se indica a continuación y consulte la documentación específica de CanTrack cuando sea necesario.

## Resumen de configuración

El objetivo de esta configuración es preparar el G900LS-4G para enviar posiciones y eventos a Plaspy usando el endpoint y puerto compartidos de la plataforma. Los pasos se enfocan en introducir los valores del servidor Plaspy, confirmar la conectividad de datos móviles y validar el reporte para que el dispositivo sea visible y funcional en Plaspy.

- Configure el rastreador para que use Plaspy como su endpoint de reporte.
- Asegúrese de que el dispositivo tenga una SIM activa con datos para usar LTE o GSM.
- Ajuste el transporte y el puerto del equipo según los requisitos de Plaspy y guarde los cambios.
- Reinicie o haga un ciclo de alimentación del rastreador si la herramienta del fabricante lo requiere para aplicar cambios.
- Valide la conectividad confirmando que el dispositivo reporta a Plaspy y aparece en la plataforma.

## Ajustes del servidor Plaspy

Use los siguientes valores públicos de servidor de Plaspy al configurar el G900LS-4G. Plaspy requiere el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo cuando el dispositivo se conecta.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP según las opciones del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar protocolo en el servidor

## Requisitos habituales antes de la configuración

- Una unidad G900LS-4G energizada y accesible, con el cableado apropiado para la instalación.
- Una SIM celular activa con datos habilitados y cobertura suficiente para las redes LTE o GSM que soporte el dispositivo.
- Conocimiento del método de configuración del dispositivo que proporciona CanTrack: aplicación del fabricante, herramienta web o comandos SMS/serie.
- Datos de APN del proveedor de la SIM si el dispositivo los requiere para conectividad GPRS o LTE.
- Acceso físico al dispositivo para aplicar ajustes, guardar cambios y realizar un reinicio si es necesario.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el G900LS-4G envía sus posiciones GPS y paquetes de telemetría al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y los asigna al registro de dispositivo correspondiente según el identificador y el protocolo que use el rastreador.

- El rastreador apunta a d.plaspy.com o a 54.85.159.138 y envía datos al puerto 8888.
- El equipo puede usar UDP o TCP para enviar paquetes, según la configuración disponible.
- Plaspy detecta automáticamente el protocolo del rastreador en las conexiones entrantes, por lo que la plataforma puede interpretar paquetes estilo GT06 o TCP/IP.
- Los datos reportados suelen incluir posición, velocidad, estado de ignición, alarmas y estado de relé para su uso en mapas, alertas e informes en Plaspy.

## Flujo de trabajo típico de configuración

1. Acceda al método oficial de configuración de CanTrack para el G900LS-4G, como la app del proveedor, la herramienta web o la interfaz de comandos SMS/serie.
2. Inserte y verifique una tarjeta SIM activa con datos y confirme los ajustes de APN si es necesario.
3. Introduzca d.plaspy.com o alternativamente 54.85.159.138 como la dirección del servidor en la configuración del equipo.
4. Configure el puerto del dispositivo en 8888 para reportes a Plaspy.
5. Seleccione UDP o TCP si el equipo requiere elegir el transporte para los paquetes salientes.
6. Aplique o guarde los ajustes en la herramienta de configuración del dispositivo.
7. Reinicie o haga un ciclo de alimentación del rastreador si las instrucciones del fabricante lo recomiendan para activar los nuevos ajustes.
8. Valide que el dispositivo reporta a Plaspy comprobando su visibilidad y la telemetría reciente en la plataforma.

## Ejemplos de comandos de configuración

Los comandos exactos o las cadenas SMS para establecer servidor, puerto y APN varían según el firmware de CanTrack y la herramienta de configuración que utilice. Dado que los métodos del fabricante pueden diferir entre revisiones regionales y de firmware, siga la documentación de CanTrack o la herramienta de su proveedor para la sintaxis precisa. Si utiliza configuración por SMS, el manual del vendedor normalmente incluye las plantillas SMS para fijar servidor, puerto y APN.

## Notas de configuración

- Las variaciones de firmware pueden cambiar la sintaxis de los comandos o la ubicación de las opciones en las herramientas del proveedor; consulte siempre las notas de la versión de CanTrack para su revisión de hardware.
- Si el dispositivo ofrece tanto UDP como TCP, elija el transporte que mejor se adapte a su instalación. Plaspy acepta ambos y detecta el protocolo automáticamente al establecer la conexión.
- Confirme APN, usuario y contraseña con su proveedor de SIM si se requieren datos móviles; algunos equipos necesitan los valores de APN antes de que GPRS/LTE pueda conectarse.
- Al usar una función de relé remoto o inmovilizador, verifique el cableado y procedimientos de seguridad y confirme que los comandos e informes de estado del relé estén habilitados en el perfil del dispositivo.
- El G900LS-4G usa el protocolo de la serie GT06 y reportes TCP/IP estándar, lo cual es compatible con el parseo de Plaspy cuando el rastreador envía datos al endpoint compartido del servidor.

## Por qué usar Plaspy con esta configuración

Usar el CanTrack G900LS-4G con Plaspy ofrece a los operadores una forma sencilla de recopilar ubicación en tiempo real, eventos de ignición, alarmas y estados de relé en flotas mixtas. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy permite visibilidad centralizada, alertas e informes sin la complejidad de un servidor por dispositivo.

Para conocer más sobre Plaspy y cómo procesa la telemetría de dispositivos, visite https://www.plaspy.com. Para obtener los detalles más actuales sobre la configuración específica del dispositivo, el comportamiento del firmware y los comandos del fabricante para el G900LS-4G, consulte la documentación oficial de CanTrack en https://www.cantrackgps.com/ ya que los métodos del proveedor pueden cambiar con el tiempo.
