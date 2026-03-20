---
slug: /gotop/d02/configuration
id: d02-configuration
sidebar_label: Configuration
title: GOTOP - D02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP D02 y conectarlo al servidor Plaspy
keywords:
  - configuración GOTOP D02
  - instalación GOTOP D02
  - GOTOP D02 Plaspy
  - configuración servidor GOTOP D02
  - rastreador GPS GOTOP D02
  - configuración rastreador mascotas GOTOP
  - configuración plataforma seguimiento GOTOP D02
  - GPRS 4G GOTOP D02
  - configuración rastreador GOTOP
  - integración GOTOP D02 Plaspy
---

# GOTOP - D02 Configuración

Esta página describe el contexto público de configuración para usar el rastreador de mascotas GOTOP D02 con Plaspy. Reúne los ajustes prácticos y específicos de servidor para la plataforma, además de un flujo operativo para que instaladores y administradores preparen el D02 para enviar ubicación y estado a Plaspy. El D02 es un rastreador impermeable IP68 para mascotas con GPS, WiFi, LBS, posicionamiento BeiDou, soporte 4G LTE y GSM, seguimiento GPRS y funciones de ubicación por SMS; esas capacidades determinan cómo puede integrarse y verificarse en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que el endpoint central del servidor y el puerto suelen ser los únicos valores que debe aplicar en el dispositivo. Los pasos exactos del fabricante para configurar el GOTOP D02 pueden variar según la versión de firmware, la revisión de hardware, la instalación y la herramienta de configuración del proveedor, por lo que esta guía debe entenderse como los pasos públicos y prácticos para conectar el dispositivo a Plaspy.

## Resumen de configuración

Para integrar el GOTOP D02 con Plaspy debe preparar el equipo para que envíe su telemetría al endpoint compartido de Plaspy y verificar que el dispositivo aparezca y reporte correctamente en la plataforma. El proceso de configuración se centra en ajustar el servidor y el transporte, confirmar la conectividad móvil y validar la entrega de mensajes.

- Configurar el endpoint y el puerto en el D02 para que reporte a Plaspy
- Seleccionar el protocolo de transporte (UDP o TCP) si la interfaz del dispositivo lo requiere
- Asegurarse de que el dispositivo tenga conectividad móvil activa compatible con sus bandas 4G LTE o GSM
- Guardar y, si es necesario, reiniciar el dispositivo para que los nuevos ajustes entren en vigor
- Verificar la conectividad y la visibilidad de la telemetría dentro de Plaspy

## Ajustes de servidor de Plaspy

Utilice estos ajustes públicos de servidor de Plaspy al configurar el GOTOP D02. Plaspy usa el mismo puerto para todos los dispositivos soportados y detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador

## Requisitos típicos antes de la configuración

- Un GOTOP D02 con batería y encendido, listo para configuración e instalación
- Tarjeta SIM activa con datos móviles compatible con las bandas de red del dispositivo (4G LTE o GSM según soporte)
- Acceso al método o software oficial de configuración GOTOP provisto por el vendedor
- Identificador del dispositivo disponible (por ejemplo IMEI) para registrar o emparejar el rastreador en Plaspy
- Visibilidad básica de red para confirmar que el rastreador puede alcanzar servidores externos
- Acceso administrativo para guardar o aplicar ajustes en el rastreador y reiniciarlo si es necesario

## Cómo se conecta este rastreador a Plaspy

El GOTOP D02 se configura para enviar ubicación y datos del dispositivo al endpoint y puerto compartidos de Plaspy, de modo que la plataforma pueda ofrecer visibilidad en tiempo real y alertas. La detección automática de protocolo de Plaspy permite que la plataforma interprete los mensajes entrantes del rastreador sin necesidad de seleccionar un protocolo en el servidor.

- El D02 envía actualizaciones periódicas de ubicación al servidor de Plaspy en d.plaspy.com o 54.85.159.138 en el puerto 8888
- El transporte puede ser UDP o TCP según la configuración del D02 y la preferencia del instalador
- Mensajes de ubicación, eventos y alarmas se transmiten por la conexión de datos móviles (GPRS/4G LTE)
- Plaspy recibe y asocia el identificador del dispositivo para mostrar el rastreador en la lista de flota o dispositivos
- Tras la configuración, valide que el seguimiento en tiempo real y las alarmas sean visibles en Plaspy

## Flujo común de configuración

1. Acceda al método de configuración oficial de GOTOP para el D02 (app del fabricante, herramienta web o comandos SMS según lo proporcione GOTOP).
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138.
3. Configure el puerto del dispositivo a 8888 (Plaspy utiliza el mismo puerto para todos los dispositivos).
4. Elija UDP o TCP como transporte si el equipo requiere seleccionar un protocolo.
5. Aplique o guarde la configuración en la herramienta del dispositivo o envíela mediante el método soportado.
6. Reinicie el D02 si el proceso del fabricante lo requiere para activar los nuevos ajustes del servidor.
7. Verifique que el dispositivo reporte a Plaspy confirmando que el rastreador aparece y envía actualizaciones en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los comandos exactos y los métodos de configuración para el GOTOP D02 dependen de la herramienta del fabricante, la versión de firmware y el método de distribución del vendedor. GOTOP suele proporcionar configuración mediante una app del proveedor, portal web o comandos SMS; consulte la documentación de GOTOP para los comandos y la sintaxis precisos. Dado que los comandos del fabricante pueden variar, siga la guía oficial de configuración GOTOP que acompañe a su dispositivo.

Si utiliza una configuración basada en SMS o comandos de texto proporcionados por GOTOP, mantenga los espacios reservados que facilite el fabricante como valores de APN o credenciales intactos (por ejemplo {{apn}}, {{apnu}}, o {{apnp}}) y reemplácelos por los ajustes de su operador de red cuando se lo indiquen.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar los nombres de menú, la sintaxis de comandos o las opciones de transporte disponibles; verifique la documentación GOTOP para la revisión de su equipo.
- Si puede elegir entre UDP y TCP, pruebe ambos en su implantación, ya que las condiciones de red y las reglas de firewall pueden afectar la confiabilidad y la latencia.
- Mantenga a mano el IMEI o el identificador único del dispositivo al registrar o verificar el rastreador en Plaspy.
- La configuración por SMS es común en muchos dispositivos GOTOP, pero la disponibilidad y la sintaxis dependen del firmware con el que se envió el equipo.
- Siempre guarde o aplique los ajustes y reinicie el dispositivo cuando sea necesario para asegurar que los cambios de servidor surtan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP D02 para que reporte a Plaspy ofrece a organizaciones y propietarios de mascotas una visibilidad centralizada de ubicaciones, eventos y condiciones del dispositivo. El uso del endpoint compartido de Plaspy y la detección automática de protocolo simplifica la puesta en marcha con muchos dispositivos, ya que solo necesita aplicar una única dirección de servidor y un puerto para comenzar a transmitir telemetría a la plataforma.

Para obtener más información sobre Plaspy y cómo gestionar dispositivos como el GOTOP D02 visite https://www.plaspy.com. Para comandos específicos del dispositivo, notas de firmware y herramientas de configuración más actuales, verifique los detalles en el sitio del fabricante en https://www.gotop.cc/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
