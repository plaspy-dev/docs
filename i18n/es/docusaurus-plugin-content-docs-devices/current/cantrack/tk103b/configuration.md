---
slug: /cantrack/tk103b/configuration
id: tk103b-configuration
sidebar_label: Configuration
title: CanTrack - TK103B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para conectar el CanTrack TK103B a Plaspy con ajustes de servidor y pasos prácticos de configuración
keywords:
  - Configuración CanTrack TK103B
  - Instalación CanTrack TK103B
  - Configuración TK103B Plaspy
  - Configuración servidor TK103B
  - Configuración rastreador GPS Plaspy
  - Configuración rastreador GPS vehicular
  - Configuración software seguimiento TK103B
  - Configuración plataforma CanTrack GPS
  - Seguimiento de flotas TK103B
  - Configuración TCP IP TK103B
---

# CanTrack - Configuración del TK103B

Esta página describe el contexto de configuración pública para usar el CanTrack TK103B con Plaspy. Reúne los pasos prácticos y los ajustes de servidor orientados a plataforma que necesitará para apuntar el TK103B a Plaspy, de modo que el dispositivo informe posición, alarmas y telemetría básica a su cuenta en Plaspy.

Plaspy utiliza parámetros de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware del TK103B, la revisión de hardware, el tipo de instalación y el método de configuración (comandos SMS, software de configuración o ajustes TCP/IP directos) que proporcione su proveedor.

## Resumen de la configuración

Configurar el TK103B para Plaspy prepara el rastreador para enviar su posición GPS y mensajes de evento a la plataforma Plaspy, de modo que los dispositivos sean visibles en mapas en tiempo real y en los flujos de reporte. El objetivo es garantizar un envío fiable vía GPRS/TCP‑IP o vías alternativas de comandos para que Plaspy reciba la telemetría sin necesidad de seleccionar manualmente el protocolo.

- Apunte el rastreador al endpoint y puerto del servidor de Plaspy para que los datos lleguen a su cuenta.
- Seleccione el método de transporte soportado por el dispositivo (UDP o TCP) si la interfaz del rastreador lo requiere.
- Verifique la conectividad GPRS y el acceso por SMS para que sea posible la configuración inicial y la diagnosis.
- Aplique y guarde la configuración del fabricante, y luego confirme que el rastreador aparece y reporta correctamente en Plaspy.
- Valide alarmas y eventos básicos como SOS, encendido del motor y alertas de geocerca dentro de Plaspy.

## Ajustes del servidor de Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: se admite UDP y TCP; el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta y todos los dispositivos en Plaspy usan el mismo puerto

## Requisitos típicos antes de la configuración

- Un TK103B instalado y con alimentación, incluyendo cableado y batería de respaldo
- Una SIM activa provisionada para datos móviles y SMS cuando se utilice GPRS/TCP‑IP
- Acceso al método de configuración oficial de CanTrack suministrado por su proveedor, como el conjunto de comandos SMS o el software de configuración
- Conocimiento básico de la versión de firmware del rastreador y de cualquier personalización del proveedor que afecte comandos o campos del servidor
- Una cuenta en Plaspy lista para recibir el feed del dispositivo y un ID de dispositivo asignado o proceso de registro si su organización lo requiere

## Cómo se conecta este rastreador a Plaspy

El TK103B normalmente envía su posición y mensajes de evento a un servidor central mediante GPRS usando TCP/IP. Cuando se configura para apuntar a Plaspy, el rastreador envía actualizaciones periódicas de ubicación, alarmas y mensajes de estado al endpoint compartido de Plaspy para que la plataforma pueda mostrar la ubicación en tiempo real y activar notificaciones.

- El rastreador se configura para reportar al endpoint y puerto compartidos de Plaspy (d.plaspy.com o 54.85.159.138 en el puerto 8888).
- La telemetría y los mensajes de alarma del dispositivo se transmiten por TCP o UDP según el transporte elegido.
- Plaspy ingiere las actualizaciones de ubicación y los mensajes de evento para la visualización en mapa, el procesamiento de geocercas y el envío de alertas.
- El soporte de comandos por SMS puede usarse para configurar remotamente o recuperar el dispositivo cuando los datos móviles no estén disponibles.
- El registro en tarjeta SD del TK103B proporciona un historial local que complementa el historial de Plaspy cuando la transmisión en vivo se interrumpe.

## Flujo de trabajo típico de configuración

1. Acceda al método o software de configuración oficial de CanTrack provisto por su proveedor (comandos SMS, herramienta USB/config o herramienta web).
2. Ingrese la dirección del servidor de Plaspy como d.plaspy.com o la IP 54.85.159.138 en el campo de servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para el envío al servidor.
4. Elija UDP o TCP si el dispositivo requiere la selección del transporte; ambos son compatibles para conexiones con Plaspy.
5. Aplique o guarde la configuración utilizando el método recomendado por el dispositivo (comando SMS de guardado o guardado desde el software).
6. Reinicie el dispositivo si el firmware o las instrucciones de instalación del rastreador requieren un reinicio para aplicar los ajustes del servidor.
7. Valide que el dispositivo reporte a Plaspy confirmando que el rastreador aparece en la plataforma y envía ejemplos de ubicaciones y eventos de alarma.

## Ejemplo de comandos de configuración

La sintaxis y los comandos exactos pueden variar según el firmware y la herramienta del proveedor. Dado que los conjuntos de comandos SMS y las utilidades de configuración del fabricante difieren entre revisiones de firmware, siga las instrucciones oficiales de CanTrack proporcionadas con su equipo. Plaspy requiere que el host del servidor y el puerto resultantes estén configurados en d.plaspy.com o 54.85.159.138 y puerto 8888, usando UDP o TCP según lo admita el rastreador.

Si dispone de la lista de comandos SMS o de un archivo de configuración proporcionado por su proveedor, utilícelo para establecer los siguientes campos en el rastreador:
- Host del servidor: d.plaspy.com o 54.85.159.138
- Puerto del servidor: 8888
- Transporte: UDP o TCP (si es necesario)

Consulte la documentación de CanTrack o a su instalador para la sintaxis exacta de los comandos según el firmware de su TK103B.

## Notas de configuración

- El firmware y las personalizaciones del proveedor pueden cambiar la sintaxis de los comandos y las interfaces de configuración disponibles; confirme siempre que el conjunto de comandos coincide con su versión de firmware TK103B.
- Elija UDP o TCP según las necesidades de la instalación y las recomendaciones del proveedor; ambos transportes son aceptados por Plaspy en el mismo puerto.
- La configuración por SMS suele estar disponible en el TK103B y es útil para la puesta en marcha o recuperación cuando los datos móviles no están disponibles.
- Asegúrese de que la SIM tenga GPRS habilitado y que la configuración APN sea la correcta para el operador móvil; los marcadores de posición de APN como [apn] pueden aparecer en las plantillas del proveedor y deben reemplazarse por los valores de su operador.
- Mantenga un registro de los ajustes aplicados y pruebe las alarmas y los eventos de encendido después de la configuración para confirmar que Plaspy recibe los mensajes esperados.

## Por qué usar Plaspy con esta configuración

Usar el TK103B con Plaspy ofrece una forma práctica de centralizar la ubicación de los vehículos, las alarmas y la telemetría básica en una sola plataforma de monitoreo. El soporte del TK103B para reportes GPRS/TCP‑IP, control por comandos SMS y registro en tarjeta SD complementa el mapeo en tiempo real, las alertas y la reproducción de historial de Plaspy, de modo que las flotas pueden mantener visibilidad y responder a incidentes de forma eficaz.

Para obtener más información sobre Plaspy y las funciones de la plataforma, visite https://www.plaspy.com. Los pasos de configuración específicos por dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información de instalación más reciente en el sitio oficial de CanTrack https://www.cantrackgps.com/.
