---
slug: /gotop/d06/configuration
id: d06-configuration
sidebar_label: Configuration
title: GOTOP - D06 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GOTOP D06 con Plaspy, con ajustes de servidor y pasos prácticos para la integración
keywords:
  - configuración GOTOP D06
  - instalación GOTOP D06
  - configuración servidor GOTOP D06
  - GOTOP D06 Plaspy
  - rastreador GPS GOTOP D06
  - configuración 4G GOTOP D06
  - configuración de seguimiento GOTOP D06
  - configuración rastreador GPS GOTOP
  - configuración rastreador Plaspy
  - gestión de flotas GOTOP D06
---

# GOTOP - Configuración del D06

Esta página detalla el contexto de configuración pública para usar el rastreador GOTOP D06 con la plataforma Plaspy. Explica los ajustes de servidor compartidos que Plaspy espera, qué preparar antes de la integración y el flujo práctico para aplicar esos ajustes, de modo que el dispositivo envíe datos para monitoreo en tiempo real y gestión de flotas.

Plaspy utiliza ajustes de servidor comunes entre los rastreadores compatibles y detecta automáticamente el protocolo cuando el dispositivo se conecta. Los pasos exactos en el lado del fabricante para ingresar la información del servidor y escoger el método de transporte pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o las herramientas del proveedor; utilice esta guía junto con la documentación del fabricante para comandos y utilidades específicas del modelo.

## Resumen de configuración

El objetivo de la configuración es apuntar el D06 a los puntos finales de servidor de Plaspy, confirmar la conectividad de red y validar que los datos de ubicación y estado lleguen a la plataforma. Preparar correctamente el dispositivo garantiza reportes confiables y visibilidad de vehículos, equipos u otros activos rastreados.

- Configure el rastreador para que reporte al dominio o IP del servidor de Plaspy para que la plataforma reciba posición y eventos.
- Seleccione el método de transporte requerido por la interfaz del dispositivo y guarde el puerto del servidor que usa Plaspy.
- Verifique la conectividad celular y que el D06 pueda enviar paquetes a través del transporte seleccionado.
- Confirme que el dispositivo aparece en Plaspy y está reportando actualizaciones de ubicación y alarmas.
- Use las herramientas del fabricante o la configuración por SMS donde estén disponibles para hacer cambios y probar la conectividad.

## Ajustes del servidor de Plaspy

- Ingrese el dominio d.plaspy.com cuando use una configuración por dominio.
- Como alternativa, utilice la IP del servidor 54.85.159.138 en dispositivos que requieran una dirección numérica.
- El puerto 8888 es el puerto de destino para todos los dispositivos en Plaspy y debe configurarse en el rastreador.
- El transporte admite UDP o TCP; configure el dispositivo para usar UDP o TCP si requiere una selección explícita.
- Plaspy detecta automáticamente el protocolo del rastreador cuando un dispositivo se conecta al punto final y puerto del servidor.

## Requisitos típicos antes de la configuración

- Un dispositivo GOTOP D06 cargado o alimentado con una micro SIM funcional instalada y servicio de datos activo.
- Acceso al método oficial de configuración de GOTOP, como el software del proveedor, la interfaz web o los comandos SMS documentados.
- Una cuenta o proyecto en Plaspy preparado para recibir y registrar el dispositivo cuando empiece a reportar.
- El IMEI o identificador único del dispositivo disponible para registrar y validar el equipo en Plaspy.
- Cobertura celular confiable en una banda de red compatible con el D06 4G LTE o con la opción de respaldo 2G según corresponda.
- Herramientas básicas para probar la conectividad como una laptop, adaptador USB o el cable de configuración del fabricante cuando sea necesario.

## Cómo se conecta este rastreador a Plaspy

Al configurarse, el D06 envía sus datos GPS y de estado al punto final y puerto del servidor de Plaspy para que la plataforma pueda procesar y mostrar la información. Plaspy recibe la telemetría entrante en un puerto compartido y utiliza detección automática de protocolo para identificar el protocolo del rastreador e ingerir los datos correctamente.

- El rastreador reporta posición, estado y mensajes de alarma a d.plaspy.com o 54.85.159.138.
- Todo el tráfico se dirige al puerto 8888 que Plaspy utiliza para los dispositivos soportados.
- Seleccione UDP o TCP en el dispositivo si se requiere una opción de transporte; el D06 puede usar cualquiera de los dos modos según las opciones de configuración.
- Plaspy detecta automáticamente el protocolo, por lo que el mismo servidor y puerto funcionan para múltiples dispositivos.
- Si se pierde la conectividad celular, el D06 puede almacenar posiciones en memoria interna y reenviarlas cuando se restaure la conexión.

## Proceso típico de configuración

1. Acceda al método de configuración oficial de GOTOP o al software suministrado por el fabricante para el D06.
2. Localice la configuración de servidor o reporte principal e ingrese d.plaspy.com o, si es necesario, la IP 54.85.159.138.
3. Establezca el puerto de reporte del dispositivo en 8888, que es el puerto compartido de Plaspy para todos los dispositivos.
4. Elija UDP o TCP si el D06 requiere una selección explícita de transporte y la interfaz muestra esa opción.
5. Guarde o aplique la configuración en la herramienta del fabricante o mediante la interfaz del dispositivo.
6. Reinicie el rastreador si el proceso de configuración o la herramienta le indican que debe reiniciar el equipo.
7. Valide que el dispositivo reporta a Plaspy revisando el estado en su cuenta Plaspy y confirmando actualizaciones recientes de ubicación.

## Ejemplos de comandos de configuración

El conjunto exacto de comandos y la sintaxis para el GOTOP D06 varían según el firmware y el método de configuración elegido. Algunos instaladores usan la aplicación de configuración del fabricante, un cable USB de configuración o comandos SMS documentados para establecer los valores de servidor y transporte. En general, deberá proporcionar el dominio d.plaspy.com o la IP del servidor 54.85.159.138 y fijar el puerto en 8888, seleccionando UDP o TCP cuando la herramienta del dispositivo lo solicite.

Si tiene acceso a comandos SMS de GOTOP o a una herramienta de configuración del fabricante, siga esa documentación del proveedor para ingresar el dominio o la IP y el puerto. Conserve cualquier marcador de posición en ejemplos del proveedor como [apn], [apnu] o [apnp] si aparecen, reemplazándolos por los valores de su operador según corresponda.

## Notas sobre la configuración

- Las versiones de firmware y las revisiones de hardware pueden cambiar la sintaxis de los comandos y la ubicación de los menús; confirme siempre los comandos con la documentación del GOTOP D06 para la revisión de su dispositivo.
- Cuando se ofrece una elección de transporte, UDP se usa comúnmente por menor sobrecarga, mientras que TCP puede ser necesario para un comportamiento de sesión más fiable según el firmware del rastreador y las condiciones de la red.
- El D06 soporta 4G LTE con respaldo 2G y utiliza una micro SIM; asegúrese de que la SIM tenga datos habilitados y que los ajustes APN del operador sean correctos si el dispositivo los requiere.
- Usar el dominio d.plaspy.com permite que el dispositivo resuelva cambios en los puntos finales de Plaspy sin reconfigurar direcciones IP numéricas.
- Plaspy utiliza el mismo puerto para todos los dispositivos compatibles y detecta automáticamente el protocolo del rastreador al conectarse, por lo que no se requieren cambios de puerto por modelo en el lado del servidor.

## Por qué usar Plaspy con esta configuración

Configurar el GOTOP D06 para que reporte a Plaspy ofrece a las organizaciones visibilidad centralizada de la ubicación de vehículos, alarmas y estado operativo usando un punto final y puerto consistentes. La capacidad 4G del D06 y su memoria interna para almacenamiento sin conexión lo hacen adecuado para rastreo de flotas y activos donde la recuperación histórica y la entrega fiable de datos son importantes.

Para obtener más información sobre Plaspy y cómo se integra con dispositivos como el GOTOP D06 visite https://www.plaspy.com. Para los comandos de configuración específicos más actuales, detalles de firmware y orientación del fabricante consulte el sitio de GOTOP en https://www.gotop.cc/ ya que los métodos del proveedor y el comportamiento del firmware pueden cambiar con el tiempo.
