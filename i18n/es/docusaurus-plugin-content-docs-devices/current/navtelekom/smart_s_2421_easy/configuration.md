---
slug: /navtelekom/smart_s_2421_easy/configuration
id: smart_s_2421_easy-configuration
sidebar_label: Configuration
title: Navtelekom - SMART S-2421 EASY+ Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar Navtelekom SMART S-2421 EASY+ con Plaspy, ajustes de servidor y flujo práctico
keywords:
  - configuración Navtelekom SMART S-2421 EASY+
  - instalación Navtelekom SMART S-2421 EASY+
  - configuración rastreador Navtelekom
  - SMART S-2421 EASY+ Plaspy
  - configuración servidor GPS
  - ajustes servidor Plaspy
  - configuración seguimiento vehicular
  - configuración gestor de flotas
  - configuración NTC Configurator
  - integración plataforma GPS
---

# Navtelekom - SMART S-2421 EASY+ Configuración

Esta página describe el contexto público de configuración para usar el rastreador Navtelekom SMART S-2421 EASY+ con la plataforma Plaspy. Reúne los ajustes de servidor y las indicaciones prácticas necesarias para apuntar el dispositivo a Plaspy y permitir el ingreso de telemetría en tiempo real, aprovechando las herramientas de configuración del fabricante.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos compatibles y detecta automáticamente el protocolo del rastreador, por lo que el punto de conexión y el puerto indicados en esta página son los mismos valores utilizados para todos los rastreadores compatibles en Plaspy. Los pasos de configuración desde el fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor, por lo que debe seguirse la guía del Pasaporte del dispositivo y la documentación del NTC Configurator junto con este documento.

## Resumen de configuración

Configurar el SMART S-2421 EASY+ para Plaspy consiste en apuntar el dispositivo al endpoint del servidor Plaspy, seleccionar el transporte si es necesario, guardar los ajustes en la herramienta del fabricante y validar que el dispositivo informe a Plaspy. El equipo soporta telemetría vehicular, eventos de acelerómetro y entradas/salidas de sensores que Plaspy procesa una vez establecida la conexión.

- Configure la dirección del servidor del equipo hacia Plaspy y confirme el modo de transporte para que el rastreador pueda abrir un canal con la plataforma.
- Ajuste y confirme el intervalo de reporte y las asignaciones de I/O usando el NTC Configurator u otra herramienta equivalente del fabricante.
- Verifique la conectividad de la SIM y la red móvil cuando aplique, y asegúrese de que el equipo tenga alimentación y un estado de batería de respaldo saludable.
- Aplique la configuración guardada, reinicie el equipo si es necesario y confirme que el dispositivo aparece en Plaspy como activo y enviando datos.

## Ajustes del servidor Plaspy

Al configurar el SMART S-2421 EASY+ para su uso con Plaspy, use los siguientes ajustes públicos del servidor:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador para las conexiones entrantes y todos los dispositivos en Plaspy usan el mismo puerto

Use ya sea el dominio o la IP al ingresar el valor del servidor en el configurador del fabricante, según la herramienta y el entorno de red.

## Requisitos habituales antes de la configuración

- Una unidad SMART S-2421 EASY+ alimentada y con acceso al Pasaporte del dispositivo y a la documentación de cableado.
- Una tarjeta SIM activa con datos (o el método de conectividad requerido por su instalación) si el reporte celular es necesario en su despliegue.
- Utilidad de configuración del fabricante NTC Configurator o el método de configuración aprobado por Navtelekom.
- Acceso a paquetes de firmware y al Pasaporte del dispositivo para orientación sobre compatibilidad de firmware y mapeo de E/S.
- Una cuenta de Plaspy o un entorno de flota listo para recibir e identificar el rastreador cuando comience a reportar.

## Cómo se conecta este rastreador a Plaspy

El SMART S-2421 EASY+ se configura para enviar posición GNSS y telemetría del dispositivo al endpoint y puerto compartidos de Plaspy. Una vez apuntado al servidor Plaspy, el rastreador abre una sesión TCP o UDP hacia el endpoint y Plaspy detecta automáticamente el protocolo para parsear los mensajes entrantes.

- El dispositivo transmite actualizaciones de posición GNSS a d.plaspy.com o 54.85.159.138 usando el puerto 8888.
- La telemetría, como eventos del acelerómetro y entradas configuradas, se reporta a Plaspy para su procesamiento de eventos.
- Plaspy ingiere los mensajes, detecta el protocolo y asigna la telemetría entrante al registro del dispositivo en la plataforma.
- Tras la configuración, la ubicación en vivo, el historial de viajes y los eventos de I/O aparecen en Plaspy para monitoreo y alertas basadas en reglas.
- La elección entre UDP o TCP puede hacerse en la herramienta del fabricante según lo requiera su entorno de red.

## Flujo típico de configuración

1. Obtenga el Pasaporte del SMART S-2421 EASY+, un ejemplo de cableado y la utilidad NTC Configurator de Navtelekom.
2. Alimente el equipo, inserte y active la SIM si es necesaria, y confirme que el dispositivo es accesible mediante el configurador.
3. En la herramienta de configuración del fabricante, ingrese el dominio d.plaspy.com o la IP 54.85.159.138 como endpoint de reporte.
4. Establezca el puerto en 8888 y seleccione UDP o TCP si el equipo le solicita elegir el transporte.
5. Configure los intervalos de reporte, las asignaciones de I/O y cualquier umbral del acelerómetro según las políticas de su flota.
6. Aplique o guarde la configuración en la herramienta y reinicie el dispositivo si el configurador o el Pasaporte indican que es necesario para aplicar los ajustes.
7. Valide que el dispositivo reporta a Plaspy comprobando la lista de dispositivos o recibiendo la telemetría inicial en la plataforma Plaspy.

## Ejemplos de comandos de configuración

El SMART S-2421 EASY+ normalmente se configura usando la utilidad NTC Configurator de Navtelekom o el flujo de configuración del fabricante. La sintaxis exacta de los comandos y el método para aplicar la configuración variarán según la versión del NTC Configurator y la versión de firmware. Al usar la herramienta del fabricante, ingrese la dirección del servidor como d.plaspy.com o 54.85.159.138 y el puerto como 8888, luego elija UDP o TCP si se le solicita. Plaspy detectará automáticamente el protocolo del rastreador una vez que el dispositivo comience a enviar paquetes al endpoint configurado.

Si depende de la configuración por SMS o de cadenas de comandos específicas proporcionadas por Navtelekom, consulte el Pasaporte del dispositivo o la documentación del NTC Configurator para conocer el formato de comandos autorizado.

## Notas de configuración

- Las variaciones de firmware y las revisiones de hardware pueden alterar los campos disponibles en el configurador; siempre empareje su versión de firmware con el Pasaporte y las notas de la versión correspondientes.
- Elija UDP o TCP en función de la fiabilidad de la red y la preferencia del instalador; ambos transportes son compatibles con Plaspy en el puerto 8888.
- Use el dominio d.plaspy.com cuando sea posible para permitir enrutamiento basado en DNS, o la IP 54.85.159.138 si el DNS no está disponible en su entorno.
- Confirme el APN de la SIM y el acceso a datos usando la herramienta del fabricante si se requiere telemetría celular; los valores de APN dependen del operador y no se proporcionan aquí.
- Mantenga una copia de seguridad de los ajustes aplicados y documente cualquier mapeo de E/S personalizado para que el comportamiento pueda repetirse en otros equipos de la flota.

## Por qué usar Plaspy con esta configuración

Usar el SMART S-2421 EASY+ con Plaspy ofrece un camino sencillo hacia la visibilidad vehicular en tiempo real, alertas basadas en eventos y análisis histórico de rutas. El GNSS integrado, el acelerómetro y las opciones flexibles de E/S del dispositivo lo hacen una opción práctica para flotas pequeñas y medianas que requieren rastreo en vivo y telemetría integrada en los flujos de trabajo de Plaspy.

Para obtener más información sobre Plaspy y cómo la plataforma ingiere la telemetría de los dispositivos visite https://www.plaspy.com. Para los pasos de configuración específicos del dispositivo más recientes, archivos de firmware y el Pasaporte oficial, verifique los detalles en el sitio del fabricante https://www.navtelecom.ru/ ya que los métodos de configuración y el comportamiento del firmware pueden cambiar con el tiempo.
