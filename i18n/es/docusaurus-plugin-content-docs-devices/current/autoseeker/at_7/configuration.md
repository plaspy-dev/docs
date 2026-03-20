---
slug: /autoseeker/at_7/configuration
id: at_7-configuration
sidebar_label: Configuration
title: Autoseeker - AT-7 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública de configuración para usar el Autoseeker AT-7 con Plaspy, incluye ajustes de servidor y pasos prácticos
keywords:
  - Configuración Autoseeker AT-7
  - Configuración AT-7 Autoseeker
  - Rastreador GPS Autoseeker Plaspy
  - Configuración de servidor AT-7
  - Compatibilidad AT-7 Plaspy
  - Guía de instalación AT-7
  - Ajustes de servidor Plaspy
  - Configuración de rastreador personal
  - Configuración rastreador GPS formato tarjeta
  - Configuración plataforma seguimiento AT-7
---

# Autoseeker - Configuración del AT-7

Esta página describe el contexto público de configuración para utilizar el rastreador Autoseeker AT-7 con la plataforma Plaspy. Explica los ajustes de servidor compartidos por Plaspy y los pasos prácticos que puede seguir para apuntar un dispositivo AT-7 hacia Plaspy, de modo que la plataforma reciba ubicaciones, alarmas y el historial de recorridos. La orientación que sigue está basada en información pública de integración y en la descripción del producto AT-7.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para el AT-7 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas de configuración del vendedor; siga el método de configuración del fabricante para menús o comandos SMS específicos proporcionados por Autoseeker.

## Resumen de la configuración

Preparar un AT-7 para Plaspy se centra en configurar el dispositivo para que reporte al punto final del servidor de Plaspy, validar la conectividad por redes celulares y confirmar que el equipo aparece en Plaspy para la supervisión en tiempo real y el rastreo histórico. Como Plaspy usa un único puerto y detección automática del protocolo, el núcleo de la configuración es consistente entre los rastreadores compatibles.

- Establezca el servidor objetivo del AT-7 a Plaspy usando d.plaspy.com o la IP del servidor Plaspy y el puerto 8888.
- Seleccione UDP o TCP como transporte si el dispositivo requiere elegir; Plaspy acepta ambos.
- Asegúrese de que el dispositivo tenga conexión celular operativa y una SIM con datos activa para alcanzar el servidor Plaspy.
- Aplique y guarde la configuración en el dispositivo y reinícielo si es necesario para que el rastreador abra una sesión con Plaspy.
- Verifique que el dispositivo aparezca en Plaspy y que las actualizaciones de ubicación y mensajes de eventos (por ejemplo SOS o alarma por vibración) sean visibles.

## Ajustes del servidor Plaspy

- dominio del servidor d.plaspy.com  
- IP del servidor 54.85.159.138  
- puerto 8888  
- transporte soportado UDP o TCP  
- detección automática de protocolo en Plaspy

Todos los dispositivos AT-7 apuntados a d.plaspy.com o a 54.85.159.138 en el puerto 8888 serán atendidos por Plaspy, que emplea el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador.

## Requisitos típicos antes de la configuración

- Un AT-7 con batería cargada y un método de configuración accesible proporcionado por Autoseeker, como una app del fabricante, herramienta web o interfaz documentada por SMS/comandos.
- Una tarjeta SIM con datos activada instalada y cobertura celular en la zona donde operará el dispositivo.
- Conocimiento del identificador del dispositivo requerido por Plaspy (IMEI o ID de equipo) para registrar la unidad en la plataforma.
- Acceso al dispositivo para aplicar ajustes y realizar un reinicio o ciclo de energía si es necesario.
- La documentación del fabricante más reciente para el AT-7 o notas de firmware de Autoseeker para seguir comandos o menús precisos.

## Cómo se conecta este rastreador a Plaspy

Cuando se configura para Plaspy, el AT-7 abre una sesión TCP o UDP hacia el punto final compartido del servidor Plaspy y transmite posición GNSS junto con datos de eventos para su procesamiento y visualización. Plaspy recibe e interpreta automáticamente el protocolo del dispositivo, por lo que el rastreador aparece en la plataforma sin variaciones de puerto por dispositivo.

- El dispositivo envía actualizaciones de posición GNSS en tiempo real a d.plaspy.com o 54.85.159.138 en el puerto 8888.
- Mensajes de eventos como SOS, vibración o entrada/salida de geocerca se suben al mismo punto final de Plaspy para notificaciones y alertas.
- Puntos cacheados mientras está offline se cargan cuando se restablece la conectividad, de modo que Plaspy conserva un historial continuo de recorridos.
- Plaspy correlaciona el ID del dispositivo o IMEI con la cuenta del cliente para mostrar ubicación, telemetría e historial de eventos.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.

## Flujo de configuración común

1. Acceda al método o software oficial de configuración del Autoseeker AT-7 según lo documente el fabricante.
2. Ingrese el dominio del servidor de Plaspy d.plaspy.com o establezca la IP del servidor a 54.85.159.138 en la configuración del servidor del dispositivo.
3. Ajuste el puerto de destino a 8888 (Plaspy usa el mismo puerto para todos los dispositivos).
4. Seleccione UDP o TCP como transporte si el equipo requiere una selección.
5. Guarde o aplique la configuración en la interfaz del dispositivo.
6. Reinicie o haga un ciclo de energía del AT-7 si el fabricante lo recomienda para iniciar una conexión nueva.
7. Valide que el rastreador reporte a Plaspy y que aparezca en su cuenta con posiciones en vivo y actualizaciones de eventos.

## Ejemplos de comandos de configuración

Los comandos exactos o rutas de menú para configurar un AT-7 varían según la herramienta del fabricante y el firmware. Los dispositivos Autoseeker pueden ofrecer una app de configuración, un conjunto de comandos SMS o una utilidad por USB/serie; consulte la documentación oficial del AT-7 para la sintaxis de comandos precisa. Dado que los comandos y los marcadores cambian con las versiones de firmware, siga la guía de Autoseeker para los formatos y ejemplos vigentes.

Si dispone de un conjunto de comandos de Autoseeker proporcionado por el fabricante, las acciones públicas típicas incluyen reemplazar el destino del servidor por d.plaspy.com o 54.85.159.138 y configurar el puerto 8888, luego guardar y reiniciar el dispositivo. Preserve cualquier marcador de APN o SIM de las plantillas del fabricante como [apn] o [apnu] cuando inserte los ajustes de su operador.

## Notas sobre la configuración

- Las diferencias de firmware pueden cambiar los menús de configuración y la sintaxis exacta de los comandos SMS o de software; confirme siempre los comandos con la documentación de Autoseeker.
- La elección entre TCP o UDP en el AT-7 depende de cómo el dispositivo implemente retransmisiones y manejo de sesiones; pruebe ambos si el comportamiento de la conectividad difiere.
- Plaspy utiliza el puerto 8888 para todos los dispositivos, lo que simplifica la configuración del servidor y el enrutamiento en la plataforma.
- Mantenga el firmware del dispositivo actualizado para beneficiarse de correcciones en la conectividad, comportamiento FOTA y el reporte de eventos.
- Al usar un método de configuración por SMS, asegúrese de que el número de provisión y los parámetros requeridos sean correctos antes de reiniciar.

## Por qué usar Plaspy con esta configuración

Usar el AT-7 con Plaspy ofrece una integración directa para organizaciones y familias que requieren visibilidad continua, alertas de eventos y revisión histórica de recorridos. La forma compacta tipo tarjeta del AT-7 y su posicionamiento multi-constelación brindan actualizaciones de ubicación confiables, mientras que Plaspy centraliza la telemetría, el enrutamiento de alarmas y el historial para una supervisión y generación de informes sencillos.

Para conocer más sobre Plaspy y las funciones de la plataforma visite https://www.plaspy.com. Para métodos de configuración específicos del dispositivo, comportamiento de firmware y orientación del fabricante, verifique los detalles en el sitio de Autoseeker https://autoseekergps.com/ antes de aplicar cambios.
