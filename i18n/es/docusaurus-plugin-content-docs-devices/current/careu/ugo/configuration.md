---
slug: /careu/ugo/configuration
id: ugo-configuration
sidebar_label: Configuration
title: CAREU - Ugo Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para CAREU Ugo con Plaspy, incluye ajustes de servidor, verificación de conectividad y flujo de puesta en marcha
keywords:
  - Configuración CAREU Ugo
  - Instalación CAREU Ugo
  - Configuración de servidor CAREU Ugo
  - Configuración Plaspy para CAREU Ugo
  - Configuración rastreador GPS Ugo
  - Compatibilidad del rastreador CAREU con Plaspy
  - Configuración seguimiento de vehículos Ugo
  - Configuración rastreador OBD II
  - Configuración de servidor Plaspy
  - Configuración de rastreadores para gestión de flotas
---

# CAREU - Configuración Ugo

Esta página documenta el contexto público de configuración para usar el rastreador OBD II CAREU Ugo con Plaspy. Explica los ajustes de servidor compartidos que Plaspy requiere y los pasos prácticos que suelen seguir instaladores y técnicos para preparar los dispositivos Ugo y lograr visibilidad de la flota y telemetría en tiempo real en la plataforma Plaspy.

Plaspy emplea ajustes de servidor comunes para los rastreadores soportados y detecta automáticamente el protocolo del dispositivo cuando se conecta. Los pasos exactos del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe usar esta guía junto con la documentación de CAREU al aplicar ajustes en una unidad Ugo específica.

## Resumen de la configuración

El proceso de configuración prepara el Ugo para comunicarse de forma fiable con Plaspy y para aparecer en su instancia Plaspy para mapeo en vivo e informes. Se centra en apuntar el dispositivo al servidor Plaspy, confirmar el transporte y la conectividad, y verificar que la telemetría llegue como se espera.

- Apunte el Ugo a Plaspy usando el endpoint y el puerto compartidos para que el dispositivo pueda establecer sesión.
- Seleccione el modo de transporte adecuado si el equipo requiere elegir entre opciones.
- Verifique el registro celular, la provisión de la SIM o eSIM y la cobertura de red antes de realizar pruebas en la plataforma.
- Aplique y guarde la configuración y realice un reinicio cuando sea necesario para confirmar los ajustes de red.
- Valide que el rastreador aparezca en Plaspy con reportes de posición esperados, telemetría OBD II y eventos del acelerómetro.
- Confirme que las opciones de gestión remota y FOTA sigan disponibles después de la configuración.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de servidor de Plaspy al configurar CAREU Ugo para Plaspy. Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Requisitos típicos antes de la configuración

- Un dispositivo Ugo alimentado y con el conector OBD II instalado correctamente en el vehículo
- Conectividad celular activa mediante una SIM estándar o eSIM del dispositivo según aplique
- Acceso al método oficial de configuración CAREU o al software del proveedor del dispositivo
- Conocimiento de si la variante de dispositivo requiere selección explícita de transporte entre UDP o TCP
- Una cuenta Plaspy y permisos para ver o validar los datos entrantes del dispositivo en la plataforma
- Herramientas básicas para reiniciar o cortar la alimentación del dispositivo después de la configuración

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado para Plaspy, el CAREU Ugo envía posiciones GNSS y telemetría del vehículo al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos reportes para mapeo, alertas e informes históricos mientras identifica automáticamente el protocolo del rastreador.

- El rastreador se configura para reportar a d.plaspy.com o 54.85.159.138 en el puerto 8888
- Los reportes del dispositivo se envían usando UDP o TCP según el firmware del dispositivo o la selección realizada
- Plaspy recibe actualizaciones de posición y telemetría OBD II para paneles en vivo e informes
- Los eventos del acelerómetro y las alertas de comportamiento de conducción se reenvían a Plaspy para su gestión de eventos
- Plaspy detecta automáticamente el protocolo usado por el Ugo cuando se conecta al puerto compartido

## Flujo de trabajo típico de configuración

1. Acceda al método de configuración oficial CAREU o al software proporcionado por el fabricante o el vendedor.
2. Si la herramienta lo solicita, introduzca el endpoint del servidor Plaspy como d.plaspy.com o la IP del servidor 54.85.159.138.
3. Establezca el puerto del dispositivo en 8888 como puerto de reporte saliente.
4. Elija el transporte UDP o TCP si el dispositivo requiere selección explícita.
5. Aplique o guarde los cambios de configuración en la herramienta del fabricante.
6. Reinicie o corte la alimentación del Ugo si el dispositivo o la herramienta indican que es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporte a Plaspy confirmando la llegada de telemetría, actualizaciones de posición y su presencia en la interfaz Plaspy.

## Ejemplos de comandos de configuración

El método exacto de configuración para CAREU Ugo puede variar según el firmware y la herramienta del proveedor. Algunos instaladores usan una utilidad de configuración de escritorio o una app móvil, mientras que otros pueden usar SMS o provisionamiento remoto basado en herramientas CAREU. Debido a que las herramientas del fabricante varían por región y firmware, siga las instrucciones oficiales de CAREU para la sintaxis de comandos y los procedimientos exactos.

Si dispone de un conjunto de comandos públicos de CAREU en la documentación del proveedor, ejecútelos en el orden especificado por CAREU e incluya los ajustes de servidor de Plaspy indicados arriba. Para campos de marcador de posición en comandos del fabricante, mantenga los placeholders como {{apn}} o {{apnu}} tal como aparecen y reemplácelos por los valores específicos de su red cuando se lo indiquen.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de menú o la sintaxis de comandos en la herramienta de configuración CAREU.
- Algunas variantes de Ugo admiten SMS o provisionamiento remoto para la configuración, mientras que otras dependen de una utilidad local o flujos FOTA.
- Elija UDP o TCP según los requisitos de su despliegue y las recomendaciones de CAREU o su proveedor de conectividad.
- Plaspy utiliza el mismo puerto 8888 para todos los dispositivos y detecta automáticamente el protocolo del rastreador cuando se conecta.
- Si planea usar FOTA o gestión remota, verifique que esas funciones permanezcan habilitadas después de cambiar los ajustes del servidor.

## Por qué usar Plaspy con esta configuración

Usar CAREU Ugo con Plaspy ofrece una vía sencilla para obtener visibilidad de vehículos en tiempo real usando el factor de forma OBD II plug and play. Apuntar el Ugo a Plaspy centraliza la ubicación, la telemetría OBD II y los reportes de eventos del acelerómetro para que los gestores de flota puedan supervisar viajes, comportamiento de conductores y la salud del vehículo desde una única plataforma.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise los detalles del fabricante CAREU en https://www.systech-iot.com/ para las instrucciones más actuales sobre configuración específica del dispositivo y orientación de firmware. Los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo, por lo que debe verificar las instrucciones más recientes en el sitio web del fabricante antes de aplicar ajustes en producción.
