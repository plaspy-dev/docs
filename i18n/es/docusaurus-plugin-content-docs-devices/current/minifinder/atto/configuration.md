---
slug: /minifinder/atto/configuration
id: atto-configuration
sidebar_label: Configuration
title: MiniFinder - ATTO Configuration
sidebar_class_name: menu_item_tracker
description: Guía para configurar MiniFinder ATTO con Plaspy, incluye ajustes de servidor y pasos prácticos
keywords:
  - Configuración MiniFinder ATTO
  - Instalación MiniFinder ATTO
  - Configuración servidor ATTO
  - Configuración seguimiento ATTO para Plaspy
  - Configuración rastreador GPS MiniFinder
  - Compatibilidad rastreador mascotas Plaspy
  - Comandos SMS configuración ATTO
  - Ajustes servidor GPRS ATTO
  - Integración GPS con Plaspy
  - Solución de problemas MiniFinder ATTO
---

# MiniFinder - Configuración del ATTO

Esta página describe el contexto público de configuración para usar el rastreador MiniFinder ATTO con la plataforma Plaspy. Aquí encontrará los pasos prácticos del lado del fabricante que usted suele emplear para apuntar el ATTO hacia Plaspy y habilitar el seguimiento en tiempo real. Cuando estén disponibles, se incluyen comandos SMS de ejemplo y los ajustes de servidor necesarios para preparar el dispositivo para el registro y la visibilidad en Plaspy.

Plaspy utiliza ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Sin embargo, los pasos específicos de configuración del fabricante pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación o la herramienta del proveedor. Las instrucciones a continuación se centran en los ajustes públicos de Plaspy y en el flujo de trabajo típico para aplicarlos a un ATTO; siempre verifique los detalles específicos del dispositivo con la documentación oficial de MiniFinder cuando sea necesario.

## Resumen de la configuración

El objetivo de la configuración es preparar el ATTO para que envíe datos de posición y eventos a Plaspy de forma confiable. Eso normalmente implica suministrar los ajustes de red correctos en el dispositivo, verificar la conectividad móvil y confirmar que el equipo aparece en la plataforma.

- Apuntar el ATTO al endpoint compartido de Plaspy para que los datos lleguen a la plataforma correcta.
- Configurar el APN del dispositivo y cualquier parámetro SMS o GPRS que requiera su proveedor móvil.
- Aplicar la dirección de servidor y el puerto para que el rastreador reporte a Plaspy en el mismo puerto usado por todos los dispositivos.
- Validar la conectividad y confirmar que el equipo es visible en Plaspy después de la configuración.
- Usar comandos SMS disponibles o herramientas del fabricante para establecer parámetros cuando el firmware del dispositivo lo soporte.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte soportado UDP o TCP en el puerto 8888
- Plaspy detecta automáticamente el protocolo del rastreador cuando el dispositivo se conecta

## Requisitos típicos antes de la configuración

- Un MiniFinder ATTO cargado y operativo con la tarjeta SIM instalada si utiliza conectividad celular.
- Una suscripción móvil activa que soporte datos o GPRS y SMS para la configuración si es necesario.
- Acceso al método oficial de configuración del MiniFinder ATTO, como comandos SMS o herramientas del proveedor.
- La información del APN del operador de la SIM para configurar el acceso de datos en el rastreador.
- Los ajustes del servidor Plaspy (d.plaspy.com o 54.85.159.138 y puerto 8888) listos para ingresar en el dispositivo.
- Un medio para verificar que el dispositivo aparece en la plataforma tras la configuración.

## Cómo se conecta este rastreador a Plaspy

Al configurarlo, el ATTO envía ubicaciones y eventos de dispositivo al endpoint y puerto compartidos de Plaspy para que la información esté disponible en la plataforma para monitoreo y alertas.

- El rastreador se configura con la dirección de servidor Plaspy d.plaspy.com o la IP 54.85.159.138.
- Los datos se envían al puerto 8888, y el dispositivo puede configurarse para usar transporte UDP o TCP en ese puerto.
- Plaspy detecta automáticamente el protocolo entrante del rastreador, lo que permite aceptar conexiones de múltiples modelos en el mismo puerto.
- Una vez en línea, el equipo transmite actualizaciones de posición y eventos de estado a Plaspy para que vehículos o animales aparezcan en el mapa y en los reportes.
- La validación de la conexión exitosa se realiza confirmando que el rastreador reporte a Plaspy y que aparezca en la interfaz de la plataforma.

## Flujo de trabajo común de configuración

1. Acceda al método de configuración oficial del MiniFinder ATTO o al software proporcionado por el fabricante, normalmente comandos SMS o herramientas del proveedor.
2. Ingrese el endpoint de Plaspy usando el nombre de dominio d.plaspy.com o la IP del servidor 54.85.159.138 en la configuración del dispositivo.
3. Establezca el puerto del servidor en 8888 en el ATTO.
4. Si el dispositivo requiere elegir un transporte, seleccione UDP o TCP según su entorno.
5. Configure el APN del equipo y cualquier parámetro SMS necesario para que el rastreador tenga conectividad móvil.
6. Aplique o guarde la configuración y envíe los SMS necesarios para confirmar los ajustes.
7. Reinicie el dispositivo si el firmware o las instrucciones del fabricante así lo requieren.
8. Valide que el dispositivo reporte a Plaspy revisando la actividad del equipo en la plataforma y confirmando actualizaciones de posición.

## Comandos de configuración de ejemplo

Para configurar el ATTO mediante comandos SMS, envíe mensajes al número del dispositivo. Los comandos a continuación se muestran en el orden según la guía pública de MiniFinder ATTO.

- Ajustar la zona horaria a UTC 0
```
tz+00
```

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador. [apn] es el nombre del punto de acceso. Si es necesario, incluya [apnu] para el usuario del APN y [apnp] para la contraseña del APN.
```
S1,[apn],[apnu],[apnp]
```
Nota: Si su APN no requiere usuario ni contraseña, envíe solo S1,[apn].

- Establecer el servidor GPRS a la IP y puerto de Plaspy
```
IP1,54.85.159.138,8888
```

Estos comandos son ejemplos públicos para configuración por SMS. Envíe cada comando como un SMS separado al rastreador, a menos que la documentación del fabricante indique comandos por lotes. El comando IP1 apunta el dispositivo a la IP y puerto 8888 de Plaspy. Como alternativa, puede usar d.plaspy.com en la interfaz del dispositivo si el ATTO soporta un campo de nombre de host en lugar de la IP directa.

## Notas de configuración

- La sintaxis exacta de los comandos y los parámetros disponibles pueden variar según la versión de firmware y la revisión de hardware; confirme siempre con la documentación de MiniFinder para su versión de firmware.
- El ATTO soporta configuración por SMS como se muestra arriba; algunos proveedores también ofrecen herramientas de escritorio o móviles que pueden realizar los mismos pasos.
- Elija UDP o TCP de acuerdo con las condiciones de su red y las indicaciones del firmware del dispositivo; Plaspy acepta ambos en el puerto 8888 y detectará automáticamente el protocolo.
- Conserve los marcadores [apn], [apnu] y [apnp] al preparar los comandos SMS y reemplace con los valores provistos por su operador.
- Tras aplicar los ajustes, puede ser necesario reiniciar el dispositivo para que los cambios tengan efecto.

## Por qué usar Plaspy con esta configuración

Configurar el MiniFinder ATTO para que reporte a Plaspy brinda a organizaciones y propietarios de mascotas un endpoint único y consistente para visibilidad en tiempo real, monitoreo de eventos y supervisión operativa. Usar los ajustes compartidos de Plaspy simplifica la provisión en serie, ya que todos los dispositivos compatibles usan el mismo puerto y la plataforma detecta automáticamente los protocolos de rastreadores, reduciendo la complejidad de configuración por dispositivo.

Para saber más sobre Plaspy y cómo la plataforma soporta dispositivos como el MiniFinder ATTO, visite https://www.plaspy.com. Para detalles actualizados sobre la configuración específica del dispositivo, notas de firmware y orientación del fabricante, consulte el sitio oficial de MiniFinder https://minifinder.se/ ya que el comportamiento y los métodos de configuración pueden cambiar con el tiempo.
