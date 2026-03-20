---
slug: /navtelekom/s_2333a_hit/configuration
id: s_2333a_hit-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-2333A HIT Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom СМАРТ S-2333A HIT y conectarlo a Plaspy con ajustes de servidor compartido
keywords:
  - Configuración Navtelekom СМАРТ S-2333A HIT
  - Configuración S-2333A HIT Navtelekom
  - Integración S-2333A HIT con Plaspy
  - Configuración rastreador GPS Navtelekom
  - Configuración rastreador vehicular Plaspy
  - Configuración rastreador GPS heredado
  - Configuración servidor rastreadores Plaspy
  - Guía NTC Configurator
  - Configuración dispositivo seguimiento de flota
  - Configuración telemetría GPS
---

# Navtelekom - СМАРТ S-2333A HIT Configuración

Esta página ofrece una guía pública para configurar el Navtelekom СМАРТ S-2333A HIT con la plataforma Plaspy. Se concentra en los ajustes prácticos orientados a la plataforma y en el flujo de trabajo necesario para dirigir el rastreador hacia los endpoints de ingestión de Plaspy, de modo que el dispositivo entregue posición GNSS y telemetría a su cuenta Plaspy. El contenido se basa en información pública del dispositivo y en los detalles del servidor Plaspy para ayudarle a planear una integración exitosa.

Plaspy usa ajustes de servidor compartidos para los rastreadores compatibles y detecta automáticamente el protocolo al recibir datos, pero los pasos en el lado del fabricante pueden variar según la versión de firmware, lote de hardware, tipo de instalación y herramientas del proveedor. Siga la documentación del fabricante y la guía del NTC Configurator para la configuración específica del dispositivo y utilice los ajustes de Plaspy que se indican más abajo como destino al que el rastreador debe reportar.

## Resumen de la configuración

Configurar el S-2333A HIT para Plaspy implica preparar el rastreador para que envíe sus mensajes de GNSS y telemetría a los endpoints de ingestión de Plaspy, de modo que la plataforma muestre ubicación en tiempo real, historial y eventos. El proceso suele emplear la herramienta de configuración del fabricante o comandos SMS/firmware para establecer los detalles de servidor y transporte y luego validar que los reportes lleguen a Plaspy.

- Apunte el rastreador a los ajustes de servidor de Plaspy para que los mensajes alcancen la ingestión.
- Seleccione el modo de transporte compatible con el rastreador y Plaspy y guarde ese ajuste.
- Asegúrese de que el rastreador tenga acceso a la red móvil y un plan de datos activo si es necesario.
- Verifique que el identificador del dispositivo que usa Plaspy coincida con el identificador del rastreador (por ejemplo IMEI) para que Plaspy asocie los datos entrantes.
- Valide la transmisión en vivo y las notificaciones de eventos en Plaspy después de la configuración.

## Ajustes del servidor Plaspy

Utilice los siguientes ajustes públicos de Plaspy al configurar el S-2333A HIT. Estos son los valores de destino a los que el rastreador debe reportar.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888 depending on device requirements
- Plaspy automatically detects the tracker protocol when data arrives
- Plaspy uses the same port for all supported devices and that port is 8888

## Requisitos típicos antes de la configuración

- Acceso físico al rastreador o un instalador con el dispositivo conectado y alimentado
- Una SIM celular activa y un plan de datos compatible con el módem del rastreador y la cobertura 2G local si es necesaria
- La herramienta o método de configuración del fabricante, como NTC Configurator, o los comandos SMS documentados
- Conocimiento del identificador del dispositivo (IMEI u otro ID del rastreador) para registrar o emparejar en Plaspy
- Acceso a los datos de su cuenta Plaspy para registro del dispositivo y comprobaciones de visibilidad
- Firmware del dispositivo actualizado si Navtelekom lo recomienda para su despliegue

## Cómo se conecta este rastreador a Plaspy

El S-2333A HIT transmite fixes GNSS y telemetría a través de su enlace GSM 2G hacia el endpoint de ingestión de Plaspy. El rastreador debe configurarse para enviar sus mensajes de telemetría al servidor y puerto de Plaspy; cuando los mensajes llegan, Plaspy detecta el protocolo y procesa posición y eventos para su visualización, alertas y análisis.

- El rastreador envía ubicación GNSS y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede configurarse como UDP o TCP según las opciones de firmware del rastreador
- Plaspy inspecciona automáticamente los mensajes entrantes y detecta el protocolo del rastreador
- La telemetría, eventos de entradas digitales y lecturas de sensores configurados se ingresan en Plaspy para monitoreo
- Conectividad exitosa se traduce en actualizaciones de posición en vivo e informes de eventos dentro de Plaspy

## Flujo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software, como la utilidad NTC Configurator, o utilice los comandos SMS/firmware documentados.
2. Ingrese el destino del servidor Plaspy usando el dominio d.plaspy.com o la IP del servidor 54.85.159.138 como servidor del dispositivo.
3. Configure el puerto del dispositivo en 8888 para que coincida con la ingestión de Plaspy.
4. Elija UDP o TCP como transporte si el rastreador requiere una selección explícita del modo de transporte.
5. Aplique o guarde la configuración en la herramienta del fabricante y, si aplica, envíe los comandos SMS finales para confirmar los ajustes.
6. Reinicie o haga un ciclo de energía del dispositivo si el fabricante indica que es necesario para que los cambios surtan efecto.
7. Valide que el dispositivo reporte a Plaspy confirmando que posiciones en vivo o telemetría aparecen en su cuenta Plaspy y que el identificador del rastreador sea reconocido.

## Ejemplos de comandos de configuración

Los comandos exactos y su sintaxis dependen del firmware del fabricante y del método de configuración que utilice. El S-2333A HIT se configura habitualmente con la utilidad NTC Configurator o con comandos SMS del fabricante descritos en el manual del producto. Dado que los comandos varían según la versión de firmware y la región, revise la documentación de Navtelekom o las notas de su proveedor para el conjunto y la sintaxis de comandos específicos de su dispositivo.

## Notas de configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar los nombres de menús o el formato de los comandos SMS; verifique la versión antes de aplicar ajustes.
- Cuando el dispositivo ofrece tanto TCP como UDP, elija el transporte recomendado para su despliegue; Plaspy acepta ambos y detecta el protocolo automáticamente al ingestarse los datos.
- El S-2333A HIT es un modelo discontinuado, pero Plaspy lo soporta en despliegues cuando está configurado para el endpoint compartido de Plaspy.
- Use la versión del NTC Configurator publicada para el S-2333A HIT para evitar discrepancias en la configuración.
- Confirme que el identificador del rastreador que utilizará en Plaspy (por ejemplo IMEI) coincida con el dispositivo para asegurar que los datos entrantes se asocien correctamente.

## Por qué usar Plaspy con esta configuración

Usar el Navtelekom СМАРТ S-2333A HIT con Plaspy permite a organizaciones que mantienen hardware legado seguir recolectando posición GNSS, entradas de eventos y telemetría en una plataforma moderna de monitoreo. Las antenas GNSS y GSM integradas del rastreador, la batería de respaldo y las múltiples opciones de E/S lo hacen adecuado para seguimiento básico de flotas, alertas de eventos y reenvío de telemetría hacia los paneles y flujos de trabajo de Plaspy.

Para saber más sobre Plaspy y cómo gestiona la ingestión de dispositivos y el monitoreo de flotas visite https://www.plaspy.com. Para obtener las instrucciones de configuración específicas por dispositivo, actualizaciones de firmware y documentación técnica, verifique la información en el sitio del fabricante https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
