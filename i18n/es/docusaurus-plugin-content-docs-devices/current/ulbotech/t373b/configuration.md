---
slug: /ulbotech/t373b/configuration
id: t373b-configuration
sidebar_label: Configuration
title: Ulbotech - T373B Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Ulbotech T373B y su integración con Plaspy, con ajustes de servidor y flujo de instalación
keywords:
  - configuración Ulbotech T373B
  - instalación Ulbotech T373B
  - Ulbotech T373B Plaspy
  - configuración T373B
  - configuración rastreador OBD II GPS
  - configuración rastreador GPS Plaspy
  - seguimiento de flotas T373B
  - configuración rastreador Plaspy
  - ajustes de servidor T373B
  - instalación rastreador Ulbotech
---

# Ulbotech - T373B Configuración

Esta página describe el contexto público de configuración para usar el rastreador Ulbotech T373B con Plaspy. Resume los ajustes públicos del servidor de Plaspy, el flujo práctico para apuntar el dispositivo a la plataforma y los requisitos comunes que debe confirmar antes de integrar el T373B en una flota gestionada con Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, mientras que los pasos exactos del fabricante para configurar el T373B pueden variar según la revisión de firmware, la variante de hardware, las preferencias del instalador y la herramienta del proveedor que utilice. La descripción del T373B que figura arriba es la base de esta guía y destaca las capacidades del dispositivo que podrá configurar al prepararlo para la integración con Plaspy.

## Resumen de la configuración

Configurar el T373B para Plaspy implica preparar el dispositivo OBD II para que envíe de manera fiable la localización y la telemetría del vehículo al endpoint y puerto compartidos de Plaspy. El objetivo es establecer conectividad celular, verificar la obtención de señal GNSS y confirmar que el rastreador informe regularmente a la plataforma para que los vehículos sean visibles y estén monitorizados.

- Apunte el rastreador al endpoint y puerto del servidor de Plaspy usados por todos los dispositivos Plaspy.
- Asegúrese de que el dispositivo tenga una SIM activa y conectividad celular para enviar datos a Plaspy.
- Verifique la recepción GNSS y la telemetría OBD II para que Plaspy muestre posiciones y datos del vehículo.
- Guarde y aplique los cambios de configuración y, si es necesario, reinicie el T373B para que empiece a reportar.
- Valide que el dispositivo aparezca en Plaspy y que se transmitan telemetría como ubicación, DTC y eventos de encendido.

## Ajustes del servidor Plaspy

- Server domain d.plaspy.com  
- Server IP 54.85.159.138  
- Port 8888  
- Transport support for UDP or TCP (the device may be configured using UDP or TCP on port 8888)  
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

Estos valores son los ajustes públicos de conexión de Plaspy que debe usar al configurar el rastreador en la herramienta del fabricante o a través de la interfaz de configuración del dispositivo.

## Requisitos típicos antes de la instalación

- Vehículo con puerto OBD II accesible para una instalación plug and play.
- Tarjeta micro SIM activa y un plan de datos compatible con el modem del dispositivo, ya que el T373B usa un módem celular Telit.
- Acceso al método de configuración del fabricante, como la herramienta móvil Bluetooth LE o la utilidad de configuración por micro USB.
- Dispositivo alimentado por el puerto OBD II y con respaldo de batería adecuado si va a probar sin el encendido activado.
- Conocimiento de la versión de firmware del dispositivo y de las instrucciones específicas del proveedor.
- Acceso a las credenciales de la cuenta de Plaspy o a la información de incorporación para verificar que el dispositivo sea visible en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

El T373B se conecta a Plaspy enviando posiciones GNSS y telemetría del vehículo a través de su módem celular al endpoint del servidor de Plaspy. Una vez configurado con el servidor y puerto de Plaspy, el rastreador transmite actualizaciones periódicas y notificaciones de eventos para su visualización y monitoreo en Plaspy.

- El rastreador reporta posiciones GPS/GLONASS y actualizaciones de movimiento al endpoint de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Telemetría como datos OBD II, alertas DTC y eventos de conducción se envían junto con los informes de posición a la plataforma Plaspy.
- La selección de transporte puede ser UDP o TCP según la configuración del dispositivo; el equipo puede configurarse para usar cualquiera de los dos con el puerto 8888.
- Plaspy detecta automáticamente el protocolo del rastreador para que el servidor acepte e interprete los mensajes entrantes del T373B.
- Los informes regulares y los mensajes basados en eventos permiten a los gestores de flota monitorizar ubicación, diagnósticos y estado del inmovilizador en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración de Ulbotech, como la herramienta móvil BLE, el software del proveedor o la utilidad USB suministrada por Ulbotech o su distribuidor.  
2. Ingrese la dirección del servidor de Plaspy como dominio d.plaspy.com o como la IP del servidor 54.85.159.138 en el campo server/host.  
3. Configure el puerto del dispositivo en 8888 según lo requiere Plaspy. Todos los dispositivos Plaspy usan este mismo puerto.  
4. Elija el transporte UDP o TCP si la interfaz de configuración le solicita seleccionar uno. El T373B puede configurarse con UDP o TCP en el puerto 8888.  
5. Aplique o guarde los cambios en la herramienta del dispositivo o mediante el método SMS/comando y confirme los mensajes de éxito de la utilidad de configuración.  
6. Reinicie el dispositivo si las instrucciones del fabricante lo requieren para aplicar los ajustes de red y servidor.  
7. Valide que el dispositivo reporte en Plaspy comprobando la actividad del dispositivo en su cuenta de Plaspy y verificando actualizaciones de posición y telemetría.

## Comandos de configuración de ejemplo

El contenido modelConfiguration para el T373B no incluyó cadenas de comandos públicamente publicadas para la configuración. Los comandos exactos y el método para aplicarlos pueden variar según el firmware de Ulbotech, la herramienta móvil o la utilidad del proveedor. Use las herramientas oficiales de Ulbotech (app BLE o utilidad USB) o la documentación del proveedor para establecer el servidor en d.plaspy.com o 54.85.159.138, configurar el puerto 8888, elegir UDP o TCP si es necesario y guardar los ajustes.

Si obtiene comandos del fabricante o cadenas SMS de la documentación de Ulbotech, siga el orden y los marcadores exactos que indique el proveedor. Mantenga los marcadores como {{apn}} u otros similares si aparecen en los ejemplos del proveedor y reemplácelos por los valores de su operador de SIM cuando se lo indiquen.

## Notas de configuración

- Diferencias de firmware y herramientas: los menús de configuración y los campos obligatorios pueden variar entre versiones de firmware y herramientas del fabricante. Confirme el procedimiento correcto para la versión de firmware de su dispositivo.
- Selección de transporte: si la herramienta requiere elegir UDP o TCP, seleccione el transporte que mejor se adapte a su despliegue; Plaspy soporta ambos en el puerto 8888.
- Use el dominio o la IP: puede configurar el rastreador con d.plaspy.com o 54.85.159.138; ambos son endpoints válidos de Plaspy para el mismo servicio.
- Validación: después de configurar, espere varios minutos para que el dispositivo establezca conectividad celular y fijaciones GNSS, y luego verifique los informes en Plaspy.
- Documentación del fabricante: consulte siempre la documentación de Ulbotech para opciones de configuración específicas del dispositivo, como APN, pasos de emparejamiento BLE o instrucciones de la utilidad USB.

## Por qué usar Plaspy con esta configuración

Usar el T373B con Plaspy brinda a los operadores de flotas una vía sencilla para el seguimiento plug-and-play de vehículos y un informe de telemetría completo. La integración OBD II del dispositivo, su rendimiento GNSS y el soporte para funciones remotas como control de inmovilizador y actualizaciones FOTA facilitan un despliegue rápido y una gestión centralizada mediante Plaspy.

Los ajustes de servidor compartidos de Plaspy hacen que la incorporación sea predecible: apunte el T373B a d.plaspy.com o 54.85.159.138 en el puerto 8888, elija UDP o TCP si es necesario y confíe en la detección automática de protocolo de Plaspy para aceptar el dispositivo. Para obtener más información sobre Plaspy y las capacidades de la plataforma, visite https://www.plaspy.com. Los métodos específicos de configuración del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar la información de configuración más reciente en el sitio de Ulbotech http://www.ulbotech.com/.
