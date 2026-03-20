---
slug: /navtelekom/s_4537/configuration
id: s_4537-configuration
sidebar_label: Configuration
title: Navtelekom - СМАРТ S-4537 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador Navtelekom СМАРТ S-4537 con Plaspy y pasos prácticos de instalación
keywords:
  - configuración Navtelekom S-4537
  - instalación Navtelekom S-4537
  - S-4537 en Plaspy
  - configuración rastreador GPS Navtelekom
  - configuración SMART S-4537
  - configuración servidor Plaspy
  - configuración rastreador de vehículo
  - configuración seguimiento de flotas
  - configuración rastreador CAN bus
  - configuración plataforma GPS
---

# Navtelekom - СМАРТ S-4537 Configuración

Esta página ofrece una guía pública para usar el rastreador Navtelekom СМАРТ S-4537 con Plaspy. Explica los ajustes de servidor compartidos de Plaspy que debe aplicar al dispositivo y detalla los pasos prácticos que suelen seguir instaladores e integradores para habilitar la visibilidad y el envío de telemetría hacia Plaspy.

Plaspy utiliza un único endpoint y puerto compartido para los dispositivos compatibles y detecta automáticamente el protocolo del rastreador cuando el equipo se conecta. Los pasos en el lado del fabricante para el S-4537 pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor (por ejemplo, el configurador de dispositivos o el sistema de gestión remota), por lo que las indicaciones siguientes deben entenderse como una guía práctica pública y no como instrucciones específicas vinculantes.

## Resumen de configuración

Este proceso prepara el SMART S-4537 para enviar posiciones GNSS, telemetría del bus CAN y datos de sensores periféricos a Plaspy usando el endpoint y puerto compartidos de la plataforma. El objetivo es configurar el equipo para que reporte ubicación y eventos de forma fiable a Plaspy y validar la conectividad tras la instalación.

- Direccione el rastreador al dominio o IP del servidor de Plaspy y configure el puerto correcto para el envío de telemetría.
- Elija el protocolo de transporte soportado por el firmware del dispositivo y por Plaspy: UDP o TCP.
- Configure los intervalos de reporte, la lógica de eventos y el mapeo CAN usando la herramienta del fabricante para capturar la telemetría requerida.
- Valide la conectividad celular y la configuración de las SIM para asegurar transmisión de datos 4G continua.
- Confirme que el rastreador aparece en línea en Plaspy y que los valores de telemetría se muestran en los paneles esperados.

## Ajustes del servidor de Plaspy

Use los siguientes ajustes públicos del servidor al configurar el S-4537 para Plaspy:

- Dominio del servidor d.plaspy.com como host primario para las conexiones de dispositivos
- IP del servidor 54.85.159.138 como dirección alternativa cuando sea necesario
- Puerto 8888 que Plaspy utiliza para las conexiones de dispositivos
- Soporte de transporte UDP o TCP según la opción de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador al conectarse y la plataforma usa el mismo puerto para todos los dispositivos compatibles

## Requisitos típicos antes de la instalación

- Confirme que el S-4537 tiene alimentación estable y que la batería interna de respaldo funciona para mantener continuidad ante eventos de energía
- Una o más tarjetas SIM activas y configuradas para datos móviles, ya que el equipo utiliza el módem 4G integrado y capacidad dual SIM
- Acceso al método de configuración oficial del fabricante, por ejemplo NTC Configurator o la herramienta remota del proveedor
- Un computador portátil o interfaz técnica necesaria para ejecutar la utilidad de configuración del fabricante
- Conocimiento del mapeo del bus CAN del vehículo y de los canales CAN que se deben capturar para telemetría cuando corresponda
- Firmware reciente que coincida con la documentación del fabricante para las funciones que desea habilitar

## Cómo se conecta este rastreador a Plaspy

El SMART S-4537 emplea su módem celular integrado para abrir una conexión de datos y enviar informes GNSS y de telemetría al endpoint y puerto del servidor Plaspy. Una vez que el equipo esté configurado para apuntar a Plaspy, la plataforma recibirá actualizaciones de ubicación, parámetros derivados del CAN y eventos de sensores para monitoreo en tiempo real y reportes históricos.

- El rastreador se configura para reportar al endpoint compartido de Plaspy d.plaspy.com o a la IP 54.85.159.138
- Todas las conexiones de dispositivo se dirigen al puerto 8888 que Plaspy usa para los datos entrantes
- El transporte puede ser UDP o TCP según las opciones de firmware del dispositivo y la preferencia del instalador
- Plaspy detecta automáticamente el protocolo del rastreador para interpretar la telemetría sin necesidad de seleccionar manualmente el protocolo en la plataforma
- Los tipos de telemetría suelen incluir posición GNSS, parámetros del bus CAN, estados de entradas digitales y lecturas de sensores RS-485 o 1-Wire cuando estén configurados

## Flujo de configuración habitual

1. Acceda al método o software oficial del fabricante, por ejemplo NTC Configurator o la utilidad provista por el vendedor.
2. En la configuración de red o servidor del dispositivo, ingrese d.plaspy.com o alternativamente 54.85.159.138 como host del servidor.
3. Establezca el puerto del servidor en 8888 que Plaspy utiliza para todos los dispositivos compatibles.
4. Si el equipo requiere selección de transporte, elija UDP o TCP según la preferencia del instalador y el soporte del firmware.
5. Configure los intervalos de reporte, las reglas de eventos y los mapeos del bus CAN en la herramienta del fabricante según las necesidades de su despliegue.
6. Aplique o guarde la configuración y, si el dispositivo lo exige, reinicie el rastreador para que los cambios entren en vigor.
7. Valide que el equipo reporte a Plaspy comprobando que aparece visible y que envía telemetría a la plataforma.

## Ejemplos de comandos de configuración

Los comandos públicos de configuración para el SMART S-4537 se gestionan mediante herramientas del fabricante como NTC Configurator o el sistema de gestión remota DRC. Las cadenas SMS o de consola exactas, si Navtelekom las proporciona para versiones de firmware concretas, deben obtenerse de la documentación oficial de Navtelekom o del configurador del dispositivo.

Si dispone de un documento de firmware o del proveedor que incluya comandos SMS o de consola explícitos para establecer servidor y puerto, utilice esos comandos en el orden recomendado por el fabricante y conserve los marcadores de posición como los valores de APN tal cual se indican. Para otros instaladores, el flujo gráfico en NTC Configurator presentará campos para host del servidor, IP del servidor, puerto y protocolo de transporte que corresponden directamente a los valores de Plaspy indicados arriba.

## Notas de configuración

- Las diferencias de firmware pueden cambiar los nombres o la ubicación de los campos de servidor en la herramienta del fabricante; confirme siempre con la interfaz del dispositivo o las notas de la versión.
- Use UDP o TCP de manera coherente con su plan de pruebas y producción; el comportamiento y la fiabilidad pueden variar según la red y el firmware.
- Dado que Plaspy utiliza el mismo puerto para todos los dispositivos, asegúrese de que el puerto 8888 sea accesible desde el entorno de red del rastreador y no esté bloqueado por reglas de enrutamiento locales.
- El soporte dual SIM ofrece redundancia para la conectividad celular, pero verifique el APN y la configuración del plan de datos en la herramienta del fabricante si es necesario.
- Al configurar la captura de datos CAN, compruebe dos veces la selección del bus y el mapeo de parámetros para evitar un mapeo incorrecto de la telemetría en Plaspy.

## Por qué usar Plaspy con esta configuración

Utilizar el Navtelekom СМАРТ S-4537 con Plaspy ofrece a los operadores de flotas e integradores una vía directa para llevar telemetría avanzada del vehículo y ubicación en tiempo real a una única plataforma. La combinación de integración dual CAN, módem 4G integrado con doble SIM e interfaces periféricas hace que el S-4537 sea adecuado para instalaciones donde se requiere tanto posición como datos del bus del vehículo para monitoreo, alertas e informes.

Para obtener más información sobre Plaspy y cómo la plataforma gestiona las conexiones de dispositivos y la telemetría, visite https://www.plaspy.com. Para detalles específicos del dispositivo, notas de firmware y las herramientas del fabricante mencionadas en esta página, consulte el sitio oficial de Navtelekom https://www.navtelecom.ru/ para instrucciones y descargas actualizadas.
