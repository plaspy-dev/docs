---
slug: /cityeasy/201/configuration
id: 201-configuration
sidebar_label: Configuration
title: Cityeasy - 201 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar el rastreador GPS Cityeasy 201 y su compatibilidad con los ajustes de servidor de Plaspy
keywords:
  - configuración Cityeasy 201
  - instalación Cityeasy 201
  - Cityeasy 201 Plaspy
  - configuración rastreador GPS Cityeasy
  - ajustes servidor Cityeasy 201
  - configuración plataforma rastreadores GPS
  - configuración seguimiento vehicular
  - instalación rastreadores GPS para flotas
  - compatibilidad Cityeasy Plaspy
  - guía conectividad rastreador
---

# Cityeasy - Configuración 201

Esta página describe el contexto público de configuración para utilizar el rastreador GPS Cityeasy 201 con la plataforma Plaspy. Resume los pasos prácticos y los ajustes de servidor compartidos necesarios para apuntar un Cityeasy 201 a Plaspy y permitir que el equipo reporte ubicación y estado. El Cityeasy 201 soporta posicionamiento en tiempo real por LBS y GPS, alertas por vibración, retransmisión de rutas históricas, carcasa IP67 y batería extraíble de 5000 mAh, lo que lo hace adecuado para monitoreo vehicular y uso en flotas.

Plaspy emplea ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador, por lo que la configuración se centra en los parámetros correctos de servidor y transporte en lugar de números de puerto por modelo. Los pasos exactos en el lado del fabricante pueden variar según la versión de firmware, revisión de hardware, tipo de instalación y herramientas del proveedor; consulte la documentación de Cityeasy o la interfaz del instalador para comandos y menús específicos del dispositivo.

## Resumen de configuración

Preparar un Cityeasy 201 para su uso con Plaspy implica apuntar el rastreador al endpoint del servidor Plaspy, guardar los ajustes y validar que la telemetría aparezca en la plataforma. El objetivo es asegurar un reporte fiable de posición y alertas, además de visibilidad de rutas y eventos históricos en Plaspy.

- Configure el dispositivo para que reporte al endpoint y puerto del servidor Plaspy.
- Elija el protocolo de transporte apropiado si el dispositivo lo requiere (UDP o TCP).
- Aplique y guarde los ajustes en el rastreador usando la herramienta oficial del fabricante o el método indicado.
- Reinicie o haga un ciclo de energía del dispositivo cuando sea necesario para que inicie sesión con Plaspy.
- Valide la conectividad y que los datos de posición y alertas aparezcan en la plataforma Plaspy.

## Ajustes del servidor Plaspy

Use estos ajustes públicos de Plaspy al configurar el Cityeasy 201:

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Soporte de transporte UDP o TCP según las opciones de configuración del dispositivo
- Plaspy detecta automáticamente el protocolo del rastreador cuando los dispositivos se conectan

Tenga en cuenta que Plaspy utiliza el mismo puerto para todos los dispositivos soportados y que la plataforma intentará identificar el protocolo del dispositivo automáticamente después de que el rastreador se conecte.

## Requisitos típicos antes de la instalación

- Acceso físico al Cityeasy 201 y a su interfaz de configuración o herramienta del fabricante.
- Batería cargada o conexión a la energía del vehículo para que el rastreador pueda arrancar y conectarse.
- Disponibilidad de red necesaria para que el dispositivo alcance el endpoint del servidor Plaspy.
- Manual oficial de configuración de Cityeasy o software del proveedor para comandos específicos del dispositivo.
- Permisos para agregar o monitorear el dispositivo en la cuenta o plataforma Plaspy.

## Cómo se conecta este rastreador a Plaspy

Cuando está configurado, el Cityeasy 201 envía datos de ubicación y eventos al endpoint del servidor Plaspy mediante el transporte seleccionado. Plaspy recibe la conexión entrante en el puerto estándar y asigna automáticamente el dispositivo a un perfil de protocolo para su análisis y visualización.

- El rastreador se configura para reportar a d.plaspy.com o a la IP equivalente 54.85.159.138.
- El dispositivo usa el puerto 8888 para todas las conexiones dirigidas a Plaspy.
- Puede seleccionar UDP o TCP si el dispositivo exige una selección explícita del transporte.
- Plaspy realiza la detección automática del protocolo para interpretar los mensajes entrantes del rastreador.
- Tras la conexión, los reportes de posición, alertas por vibración y las actualizaciones de rutas históricas pueden aparecer en su cuenta de Plaspy.

## Flujo de configuración habitual

1. Acceda al método de configuración oficial de Cityeasy o al software del proveedor según lo documentado por el fabricante.
2. Ingrese la dirección del servidor Plaspy usando el dominio d.plaspy.com o la IP 54.85.159.138 en el campo correspondiente.
3. Establezca el puerto del dispositivo en 8888 según lo requiere Plaspy.
4. Seleccione UDP o TCP si la configuración del rastreador requiere elegir un protocolo de transporte.
5. Aplique o guarde la configuración utilizando la herramienta del fabricante o el menú del dispositivo.
6. Reinicie o haga un ciclo de energía del Cityeasy 201 si el equipo necesita reiniciarse para aplicar los cambios de red.
7. Valide que el dispositivo reporte a Plaspy verificando la llegada de telemetría en la plataforma y confirmando actualizaciones de posición o eventos.

Siga este flujo con la interfaz de configuración de Cityeasy que tenga disponible y verifique cada paso con los indicadores de estado del dispositivo o las herramientas de diagnóstico del fabricante.

## Ejemplos de comandos de configuración

Los comandos exactos y la sintaxis de configuración varían según el firmware de Cityeasy y la herramienta del proveedor. Debido a que los métodos del fabricante difieren, esta página no proporciona cadenas de comandos universales. Use la utilidad de configuración oficial de Cityeasy, la lista de comandos por SMS o la herramienta web proporcionada por su proveedor para establecer el servidor en d.plaspy.com o 54.85.159.138 y el puerto en 8888, además de elegir UDP o TCP si se solicita.

Si dispone de una lista de comandos específica de su modelo proporcionada por Cityeasy, aplique esos comandos en el orden recomendado por el proveedor y luego confirme la conectividad con Plaspy.

## Notas de configuración

- Las revisiones de firmware y hardware pueden cambiar la sintaxis de los comandos y los nombres de menú; siempre consulte las notas de la versión de Cityeasy para detectar diferencias.
- La mejor práctica del instalador es probar un solo dispositivo primero y confirmar que posición y alertas aparecen en Plaspy antes del despliegue masivo.
- Elija UDP o TCP según el soporte del dispositivo y el entorno de red; Plaspy aceptará cualquiera de los dos en el puerto 8888 y detectará el protocolo automáticamente.
- Algunas herramientas de configuración exponen tanto un campo de dominio como uno de IP; ingresar d.plaspy.com se recomienda para un mantenimiento más sencillo, y 54.85.159.138 está disponible como alternativa explícita.
- Confirme que las herramientas del proveedor que utilice sean compatibles con el firmware Cityeasy 201 instalado en su unidad.

## Por qué usar Plaspy con esta configuración

Usar el Cityeasy 201 con Plaspy centraliza la ubicación de vehículos, alertas por vibración y los datos de rutas históricas en una sola plataforma para facilitar el monitoreo y la supervisión operativa. Apuntar el rastreador a Plaspy usando los ajustes de servidor compartidos simplifica el despliegue en múltiples dispositivos, ya que la plataforma acepta conexiones en un único puerto y detecta automáticamente los formatos de protocolo.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Los métodos de configuración específicos del dispositivo, el comportamiento del firmware y los detalles del fabricante pueden cambiar con el tiempo, por lo que debe verificar las instrucciones de instalación más recientes en el sitio web del fabricante Cityeasy o en la documentación del proveedor antes de finalizar su instalación.
