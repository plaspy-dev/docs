---
slug: /navtelekom/signal_s_2613/configuration
id: signal_s_2613-configuration
sidebar_label: Configuration
title: Navtelekom - СИГНАЛ S-2613 Configuration
sidebar_class_name: menu_item_tracker
description: Guía práctica para configurar Navtelekom СИГНАЛ S-2613 con los ajustes de servidor de Plaspy y el flujo de integración
keywords:
  - Configuración Navtelekom СИГНАЛ S-2613
  - Instalación Navtelekom S-2613
  - SIGNAL S-2613 en Plaspy
  - Configuración de servidor S-2613
  - Ajustes de servidor Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de vehículos
  - Seguimiento de flota S-2613
  - Rastreador GPS Navtelekom
  - Guía de integración S-2613
---

# Navtelekom - СИГНАЛ S-2613: Configuración

Esta página documenta el contexto público de configuración para usar el rastreador Navtelekom СИГНАЛ S-2613 con Plaspy. Se enfoca en los ajustes de servidor prácticos y en el flujo de trabajo necesario para apuntar el dispositivo a Plaspy, de modo que la ubicación y la telemetría aparezcan en la plataforma. El contenido está dirigido a instaladores, administradores de flotas e integradores que requieren indicaciones claras y accionables basadas en información pública.

Plaspy utiliza ajustes de servidor compartidos entre dispositivos soportados y detecta automáticamente el protocolo del rastreador cuando llegan los datos. Los pasos exactos en el equipo del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas de configuración que proporcione Navtelekom, como NTC Configurator o DRC. Use los pasos siguientes como referencia pública centrada en la plataforma y verifique los procedimientos específicos del dispositivo con la documentación de Navtelekom.

## Resumen de configuración

Este proceso prepara el SIGNAL S-2613 para reportar la ubicación GNSS y la telemetría del dispositivo a Plaspy, de modo que la unidad sea visible y gestionable en la plataforma. El objetivo principal es asegurarse de que el rastreador apunte al endpoint de Plaspy, utilice el transporte y puerto correctos, y que la conectividad y ajustes del dispositivo (SIM/APN, mapeo de E/S, comportamiento de la batería auxiliar) se validen para un reporte fiable.

- Apuntar el dispositivo al endpoint del servidor Plaspy para que los mensajes de ubicación y estado se envíen a Plaspy.
- Seleccionar el método de transporte (UDP o TCP) y confirmar que el dispositivo use el puerto de Plaspy.
- Validar la SIM, el registro celular y los ajustes APN para que el módem 2G pueda alcanzar Plaspy.
- Guardar y aplicar los cambios usando la herramienta de configuración de Navtelekom y reiniciar el dispositivo si es necesario.
- Confirmar que el dispositivo sea visible en Plaspy y que la telemetría como entradas digitales y canales analógicos se reporte correctamente.

## Ajustes del servidor Plaspy

- Server domain: d.plaspy.com
- Server IP: 54.85.159.138
- Port: 8888
- Transport: el dispositivo puede configurarse usando UDP o TCP en el puerto 8888
- Protocol detection: Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta
- Note: Plaspy usa el mismo puerto para todos los dispositivos soportados, por lo que debe configurar el puerto 8888 para cualquier rastreador que agregue a Plaspy

## Requisitos típicos antes de la configuración

- Un SIGNAL S-2613 alimentado e instalado con antenas GNSS y GSM externas conectadas según lo requiera la instalación.
- Una SIM 2G activa en el dispositivo y credenciales APN correctas configuradas para que el rastreador acceda a la red móvil.
- Acceso a las herramientas o métodos de configuración de Navtelekom, como NTC Configurator o la consola de gestión remota DRC.
- Credenciales o acceso físico necesarios para cambiar los ajustes del servidor del dispositivo y guardar/aplicar la configuración.
- Comprensión básica de si UDP o TCP es preferible para su despliegue (fiabilidad de red vs manejo de sesiones).
- Una cuenta en Plaspy o contacto con el administrador de Plaspy para confirmar la activación y visibilidad del dispositivo después de la configuración.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el SIGNAL S-2613 envía coordenadas GNSS, marcas de tiempo y la telemetría disponible al endpoint y puerto compartidos de Plaspy, de modo que el dispositivo se rastrea en tiempo real en los paneles de Plaspy. Plaspy ingesta la ubicación, los eventos de entradas y la telemetría del dispositivo y mapea esos datos a vistas de flota, alertas e historial.

- El rastreador se apunta a d.plaspy.com (o 54.85.159.138) y envía mensajes al puerto 8888.
- El transporte se configura en UDP o TCP según las opciones del dispositivo y la preferencia del instalador.
- Plaspy detecta automáticamente el protocolo del rastreador, por lo que no es necesario seleccionar explícitamente el protocolo en la plataforma.
- Los eventos reportados (entradas digitales, valores analógicos, telemetría RS-485 cuando está habilitada) se hacen visibles en Plaspy para alertas e informes.
- El enfoque de puerto compartido simplifica agregar varios dispositivos porque todos usan el puerto 8888 para conectarse a Plaspy.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de Navtelekom, como NTC Configurator o la herramienta de gestión remota DRC.
2. En los ajustes de servidor del dispositivo, ingrese la dirección del servidor Plaspy usando d.plaspy.com o 54.85.159.138.
3. Establezca el puerto del servidor del dispositivo en 8888, ya que Plaspy usa el mismo puerto para todos los dispositivos.
4. Si el dispositivo requiere elegir un transporte, seleccione UDP o TCP según su red y necesidades operativas.
5. Configure la SIM y los ajustes APN del módem 2G para que el dispositivo pueda establecer la conexión de datos.
6. Aplique o guarde la configuración y reinicie el dispositivo si la herramienta o el firmware requieren un reboot para aplicar los cambios.
7. Valide que el dispositivo reporte a Plaspy comprobando la presencia del dispositivo y la telemetría inicial en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y los campos de configuración los proporciona Navtelekom y pueden variar según la versión de firmware o la interfaz de configuración. Para el SIGNAL S-2613 normalmente usará NTC Configurator o DRC para establecer la dirección y el puerto del servidor en lugar de enviar comandos de texto sin procesar. Debido a que los métodos de configuración del fabricante difieren, consulte la documentación de Navtelekom o la herramienta de configuración del dispositivo para los campos precisos donde debe ingresar d.plaspy.com o 54.85.159.138 y el puerto 8888. Plaspy aceptará tráfico de los dispositivos por UDP o TCP en el puerto 8888 y detectará automáticamente el protocolo del equipo.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres de los menús y la ubicación de los campos de configuración en NTC Configurator o DRC; siempre siga las instrucciones más recientes de Navtelekom para su firmware.
- El SIGNAL S-2613 usa un módem GSM 2G y una sola ranura SIM; confirme la cobertura celular en su zona de operación y valide las credenciales APN y de autenticación.
- Elija UDP para menor sobrecarga y entrega de paquetes más simple, o TCP cuando necesite fiabilidad de sesión y entrega ordenada; Plaspy acepta ambos.
- Después de aplicar los ajustes, a menudo se requiere reiniciar el dispositivo para que la sesión de red se restablezca y los mensajes comiencen a llegar a d.plaspy.com en el puerto 8888.
- Verifique las conexiones de antena y el comportamiento de la batería auxiliar para asegurar reportes consistentes durante eventos de alimentación y transientes eléctricos del vehículo.

## Por qué usar Plaspy con esta configuración

Configurar el Navtelekom СИГНАЛ S-2613 para reportar a Plaspy ofrece una vía sencilla para obtener ubicación en tiempo real, telemetría y monitoreo de eventos dentro de una plataforma telemática gestionada. Para flotas y operadores de activos, integrar unidades S-2613 con Plaspy permite visualización centralizada, alertas basadas en reglas e informes históricos que mejoran la supervisión operativa y los tiempos de respuesta.

Para saber más sobre cómo Plaspy soporta la integración de rastreadores y la gestión de flotas, visite https://www.plaspy.com. Para detalles específicos de configuración del dispositivo, actualizaciones de firmware y la guía más reciente del fabricante, verifique la información actual en el sitio oficial de Navtelekom https://www.navtelecom.ru/ ya que los campos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
