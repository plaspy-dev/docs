---
slug: /navtelekom/smart_s_2423/configuration
id: smart_s_2423-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2423 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración del rastreador Navtelekom SMART S‑2423 y su compatibilidad con Plaspy usando el servidor compartido
keywords:
  - Configuración Navtelekom SMART S-2423
  - Configuración SMART S-2423
  - Rastreador Navtelekom Plaspy
  - Configuración de servidor SMART S-2423
  - Configuración rastreador GPS Navtelekom
  - Integración SMART S-2423 con Plaspy
  - Configuración rastreador de vehículos
  - Configuración rastreadores para gestión de flotas
  - NTC Configurator SMART S-2423
  - Configuración seguimiento Navtelekom
---

# Navtelekom - Configuración SMART S‑2423

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom SMART S‑2423 con Plaspy. Aquí encontrará los ajustes de servidor compartido que requiere Plaspy y un resumen de las opciones de configuración a nivel de fabricante. Use esta guía para preparar el equipo y comprender cómo enviará posiciones y telemetría a Plaspy para supervisión en vivo e informes históricos.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador; sin embargo, los pasos exactos en el lado del fabricante pueden variar según el firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. El SMART S‑2423 soporta NTC Configurator y DRC para gestión remota, herramientas habituales para aplicar los ajustes de servidor y transporte antes de validar la conexión en Plaspy.

## Resumen de la configuración

El objetivo es apuntar el SMART S‑2423 al endpoint del servidor Plaspy, seleccionar el transporte correcto y verificar que el rastreador envíe datos de GPS y telemetría a la plataforma. El proceso normalmente combina la herramienta de configuración del fabricante con un paso de validación en Plaspy para confirmar visibilidad e informes de eventos.

- Configure el rastreador para que reporte al endpoint de Plaspy y que la posición y la telemetría lleguen a la plataforma
- Elija UDP o TCP según la preferencia del instalador o las opciones del firmware
- Aplique y guarde los ajustes usando NTC Configurator o el sistema de gestión del dispositivo
- Reinicie o corte y restablezca la alimentación del equipo si es necesario para activar los nuevos ajustes de servidor
- Valide las transmisiones en Plaspy confirmando que el dispositivo es visible y envía actualizaciones

## Ajustes del servidor Plaspy

- server domain d.plaspy.com  
- server IP 54.85.159.138  
- port 8888  
- transport support for UDP or TCP  
- automatic protocol detection in Plaspy

Todos los dispositivos en Plaspy usan el mismo puerto y la plataforma detecta automáticamente el protocolo del rastreador, por lo que solo necesita configurar el dispositivo para que utilice el endpoint y puerto compartidos.

## Requisitos típicos antes de la configuración

- Acceso al SMART S‑2423 y permiso para configurarlo mediante el método oficial del fabricante, como NTC Configurator o DRC  
- Dispositivo con batería cargada o alimentación aplicada y una SIM 2G funcional insertada y registrada en un operador que soporte 2G  
- Conocimiento del IMEI del dispositivo o del identificador único de seguimiento para mapearlo en Plaspy  
- Documentación o notas de la versión del firmware instalado para confirmar los parámetros de configuración soportados  
- Un modo de reiniciar o cortar la alimentación del rastreador tras aplicar nuevos ajustes para asegurar que se apliquen

## Cómo se conecta este rastreador a Plaspy

El SMART S‑2423 se configura para enviar sus fijaciones de posición GLONASS/GPS y la telemetría al endpoint y puerto compartidos de Plaspy. Plaspy ingiere esos mensajes y determina automáticamente el protocolo del dispositivo, por lo que el rastreador aparece en la plataforma sin necesidad de seleccionar el protocolo por dispositivo.

- El equipo envía mensajes de posición y telemetría a d.plaspy.com o 54.85.159.138 en el puerto 8888  
- Puede seleccionar UDP o TCP en el dispositivo si el firmware exige elegir un transporte antes de enviar datos a Plaspy  
- Plaspy detecta automáticamente el protocolo del rastreador y decodifica los mensajes entrantes para mapas, alertas e historial  
- Entradas y salidas del dispositivo, así como telemetría de periféricos mediante RS‑485, 1‑Wire o Bluetooth, se reenvían a Plaspy según la configuración

## Flujo de trabajo común de configuración

1. Acceda al método oficial de configuración del fabricante o al software, por ejemplo NTC Configurator o la gestión remota DRC.  
2. En los ajustes de servidor introduzca d.plaspy.com o la IP del servidor 54.85.159.138 como host de destino.  
3. Configure el puerto del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.  
4. Elija UDP o TCP si el dispositivo requiere seleccionar el transporte en sus ajustes.  
5. Aplique o guarde la configuración en la herramienta del fabricante y confirme que los cambios se aceptaron.  
6. Reinicie el SMART S‑2423 si la herramienta o el firmware requieren un reinicio para que los ajustes de red entren en vigor.  
7. Valide que el dispositivo reporta a Plaspy comprobando la visibilidad del dispositivo y las actualizaciones de posición recientes en la plataforma.

## Ejemplos de comandos de configuración

La sintaxis exacta de comandos y pasos de configuración puede variar según la herramienta del fabricante, la versión de firmware y si usa un configurador con interfaz gráfica o comandos remotos. Para el SMART S‑2423, los valores clave que ingresará son el endpoint del servidor Plaspy y el puerto. Normalmente deberá introducir el dominio d.plaspy.com o la dirección IP 54.85.159.138 y el puerto 8888, además de seleccionar UDP o TCP si el firmware lo exige. Aplique y guarde esos ajustes dentro de NTC Configurator o la interfaz de gestión del dispositivo y luego valide el reporte en Plaspy.

## Notas de configuración

- El comportamiento del firmware y los ajustes disponibles pueden diferir entre revisiones, así que verifique siempre la versión de firmware antes de realizar cambios.  
- Use TCP cuando necesite entrega orientada a conexión y UDP cuando prefiera menor latencia y menos sobrecarga, si su instalación debe elegir un transporte. Plaspy soporta ambos y detectará el protocolo automáticamente.  
- NTC Configurator y DRC son las herramientas recomendadas por el fabricante para aplicar ajustes persistentes y gestionar el ciclo de vida del firmware del SMART S‑2423.  
- Confirme la disponibilidad de la red 2G con su operador móvil en la región de despliegue, ya que el rastreador usa un módem 2G con una sola SIM.  
- Después de aplicar los ajustes, permita tiempo para que el dispositivo se registre en la red y para que Plaspy procese los primeros mensajes antes de iniciar la resolución de problemas.

## Por qué usar Plaspy con esta configuración

Emplear el SMART S‑2423 con Plaspy ofrece a los administradores de flotas y activos una visibilidad consolidada de la posición y la telemetría en una única plataforma. El dispositivo proporciona posicionamiento GNSS y múltiples interfaces de telemetría, mientras Plaspy recibe datos de ubicación y eventos a través del endpoint compartido y interpreta automáticamente el protocolo del equipo para mapas, alertas e informes históricos.

Para obtener más información sobre Plaspy visite https://www.plaspy.com y revise la documentación y soporte actual del fabricante en https://www.navtelecom.ru/ para verificar los pasos de configuración más recientes, el comportamiento del firmware y cualquier recomendación específica de la plataforma. Los métodos y el firmware pueden cambiar con el tiempo, por lo que siempre confirme los detalles de configuración con la documentación del fabricante.
