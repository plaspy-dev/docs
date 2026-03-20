---
slug: /cantrack/tk08al/configuration
id: tk08al-configuration
sidebar_label: Configuration
title: CanTrack - TK08AL Configuration
sidebar_class_name: menu_item_tracker
description: Configure el CanTrack TK08AL para Plaspy con ajustes de servidor compartidos y guía práctica de instalación para gestión de flotas
keywords:
  - configuración CanTrack TK08AL
  - configuración TK08AL
  - integración TK08AL Plaspy
  - configuración rastreador GPS CanTrack
  - configuración de servidor TK08AL
  - configuración seguimiento de flotas TK08AL
  - configuración software de seguimiento CanTrack
  - configuración plataforma GPS TK08AL
  - configuración rastreador de vehículo CanTrack
  - configuración telemetría TK08AL
---

# CanTrack - TK08AL Configuración

Esta página describe el contexto público de configuración para usar el CanTrack TK08AL con Plaspy. Resume los ajustes de servidor prácticos y los pasos habituales que debe seguir para apuntar un TK08AL a Plaspy y que la telemetría y los eventos lleguen a su cuenta de flota en Plaspy. La información aquí se centra en patrones de configuración públicos y agnósticos del fabricante, así como en los ajustes compartidos de Plaspy necesarios para la integración.

El TK08AL es compatible con Plaspy desde fábrica y admite LTE Cat 1 con conmutación a GSM para cobertura. Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y la herramienta de configuración del proveedor que utilice. Compare siempre esta guía pública con la documentación más reciente de CanTrack para instrucciones específicas de firmware.

## Resumen de la configuración

Preparar el TK08AL para Plaspy implica configurar el dispositivo para que envíe posiciones y eventos al endpoint de Plaspy y confirmar la entrega fiable de la telemetría. El objetivo es que el rastreador aparezca en Plaspy de forma rápida y repetible, validando que el movimiento, encendido, SOS y alarmas de energía se reporten correctamente.

- Configure la dirección del servidor o el destino APN del equipo al endpoint de Plaspy para que la telemetría se enrute a la plataforma.
- Seleccione el protocolo de transporte que soporte el dispositivo y confirme que Plaspy lo acepta.
- Guarde y aplique los ajustes, luego verifique que el dispositivo se conecte y envíe actualizaciones de posición iniciales.
- Valide eventos clave como encendido, SOS y corte de alimentación para confirmar que se ven en Plaspy tras la configuración.
- Confirme el comportamiento de conmutación y el almacenamiento temporal para asegurar que los datos históricos se entreguen después de pérdidas temporales de conectividad.

## Ajustes del servidor Plaspy

Use los siguientes ajustes públicos de Plaspy al configurar el TK08AL:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador y la plataforma utiliza el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la configuración

- Confirme que el TK08AL tenga alimentación y una batería de respaldo funcional si está presente para reportes de corte de energía.
- Instale una tarjeta SIM activa con un plan de datos compatible con LTE Cat 1 y conmutación a GSM según sea necesario.
- Obtenga el método o software de configuración del fabricante, como la herramienta PC USB, comandos SMS o el canal de configuración GPRS que soporte CanTrack.
- Asegúrese de contar con el IMEI del dispositivo y cualquier credencial de instalador requerida por la utilidad de configuración de CanTrack.
- Verifique que las antenas y el cableado estén instalados correctamente para una recepción GNSS y celular estable.
- Tenga acceso a la cuenta de Plaspy o las instrucciones de incorporación de dispositivos si su despliegue requiere registro o mapeo de activos tras la conexión.

## Cómo se conecta este rastreador a Plaspy

Al configurarse para Plaspy, el TK08AL envía telemetría de ubicación y eventos al endpoint y puerto compartidos de Plaspy. Plaspy procesa las actualizaciones de posición, identificadores de conductor y mensajes de evento para que los gestores de flota puedan monitorear vehículos y recibir alertas en tiempo real.

- El rastreador reporta posiciones GPS y telemetría a d.plaspy.com usando el puerto 8888.
- El transporte puede configurarse como UDP o TCP en el dispositivo y Plaspy acepta ambos.
- Plaspy detecta automáticamente el protocolo del rastreador para decodificar la telemetría GT del TK08AL.
- Eventos del dispositivo como encendido, SOS, exceso de velocidad y corte de energía se reenvían a Plaspy para alertas e informes.
- El almacenamiento local del rastreador mantiene los registros durante cortes y los entrega al servidor de Plaspy cuando se restaura la conectividad.

## Flujo de trabajo común de configuración

1. Acceda al método o software oficial de configuración de CanTrack adecuado para el TK08AL, como la herramienta PC USB, SMS o el canal de configuración GPRS.
2. Verifique la SIM y la conectividad celular y asegúrese de que haya recepción GNSS para una primera fijación de posición.
3. Ingrese d.plaspy.com o 54.85.159.138 como dirección del servidor en los ajustes del dispositivo.
4. Configure el puerto del servidor a 8888 como puerto de destino para la telemetría.
5. Si el dispositivo requiere seleccionar transporte, elija UDP o TCP según su preferencia de instalación.
6. Aplique o guarde la configuración y siga las recomendaciones del fabricante para escribir los ajustes en la memoria no volátil.
7. Reinicie el TK08AL si la herramienta o el firmware lo requieren para activar los nuevos ajustes de servidor.
8. Verifique que el dispositivo reporte a Plaspy revisando las primeras actualizaciones de posición y mensajes de evento en su interfaz de Plaspy.

## Comandos de ejemplo para configuración

Existen múltiples canales de configuración que CanTrack suministra para el TK08AL y los comandos exactos o pasos de la GUI dependen del firmware y de la herramienta de configuración de CanTrack que utilice. Dado que los conjuntos de comandos varían según el modelo, consulte el manual de configuración de CanTrack para los comandos SMS o serie exactos usados por su revisión de firmware. Los enfoques públicos típicos incluyen:

- Usar la herramienta de configuración PC de CanTrack para establecer los campos de servidor y puerto a d.plaspy.com y 8888.
- Enviar comandos de configuración por SMS si su firmware lo soporta para establecer servidor, puerto y transporte.

Para dispositivos y firmware que aceptan comandos SMS, en los ejemplos se usan marcadores como [apn], [apnu] o [apnp]. Estos marcadores representan el nombre del APN del operador móvil, el usuario del APN y la contraseña del APN respectivamente y deben reemplazarse por los valores proporcionados por su operador SIM cuando el dispositivo lo requiera.

## Notas de configuración

- Las diferencias de firmware pueden cambiar menús exactos, sintaxis de comandos y las opciones de transporte disponibles. Confirme los comandos con el manual del fabricante para su firmware.
- Elegir TCP frente a UDP afecta el comportamiento de conexión; UDP puede ser más liviano mientras que TCP proporciona una sesión persistente dependiendo del diseño de la red.
- Plaspy usa el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo, por lo que solo necesita establecer servidor y puerto una vez.
- Si utiliza configuración por SMS, asegúrese de que los mensajes provengan de un número de gestión confiable si el dispositivo aplica filtros de comandos.
- Mantenga un registro de los ajustes aplicados y del IMEI del dispositivo para facilitar la resolución de problemas si la telemetría no aparece en Plaspy.

## Por qué usar Plaspy con esta configuración

Configurar el TK08AL para reportar a Plaspy brinda a los operadores de flota visibilidad consolidada sobre la ubicación de los vehículos, la identificación de conductores y los eventos de seguridad. La combinación de conectividad LTE robusta y las funciones del TK08AL, como detección de encendido, alertas SOS y alarmas por corte de energía, lo hace adecuado para antirobo, autorización de conductores y monitoreo operativo cuando se integra en una plataforma centralizada.

Learn more about how Plaspy can centralize telemetry and alerts for your fleet at https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance consult CanTrack documentation at https://www.cantrackgps.com/ to verify setup details and command syntax.
