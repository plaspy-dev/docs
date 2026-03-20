---
slug: /topshine/mt02/configuration
id: mt02-configuration
sidebar_label: Configuration
title: TopShine - MT02 Configuration
sidebar_class_name: menu_item_tracker
description: Guía pública para configurar TopShine MT02 con Plaspy en tiempo real usando servidor compartido y ajuste por SMS o GPRS
keywords:
  - Configuración TopShine MT02
  - Configurar TopShine MT02
  - Configuración de servidor MT02
  - Guía de configuración Plaspy
  - Configuración de rastreador GPS
  - Configuración de rastreo de vehículos
  - Rastreador para gestión de flotas
  - Configuración GPRS SMS
  - Compatibilidad MT02 Plaspy
  - Guía TopShine MT02
---

# TopShine - Configuración MT02

Esta página documenta el contexto público de configuración para usar el TopShine MT02 con la plataforma Plaspy. Reúne los ajustes prácticos y públicamente disponibles, además de ejemplos de comandos SMS que se emplean para apuntar un MT02 a los servidores de Plaspy y para realizar pasos básicos de puesta en marcha. Use esta guía para preparar un dispositivo para su integración con Plaspy y para entender qué debe verificar antes de la activación.

Plaspy utiliza un punto de conexión y puerto compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos del fabricante pueden variar según firmware, revisión de hardware, tipo de instalación y herramientas del proveedor, por lo que considere los comandos aquí como ejemplos públicos y no como un procedimiento único para todos los casos. Cuando esté disponible, esta página incluye los comandos SMS del MT02 proporcionados por el fabricante para la configuración por GPRS y SMS, y breves notas sobre los marcadores que debe reemplazar.

## Resumen de configuración

Este proceso prepara un MT02 para que se comunique de forma fiable con Plaspy para rastreo en tiempo real y telemetría. El objetivo es configurar el acceso de red (APN), apuntar el rastreador a los ajustes de servidor de Plaspy, seleccionar el transporte si es necesario y confirmar que el dispositivo está enviando reportes.

- Configure el APN y el acceso de red del equipo para que GPRS pueda usarse como canal de reporte.
- Establezca la dirección del servidor del dispositivo hacia Plaspy para que los mensajes se envíen a d.plaspy.com o a su IP.
- Asegúrese de que el dispositivo reporte al puerto de Plaspy y elija UDP o TCP cuando el equipo requiera selección de transporte.
- Valide la identidad y el reporte del equipo usando el IMEI y los comandos de verificación.
- Confirme que los datos sean visibles en Plaspy y ajuste el intervalo de reporte según sea necesario.

## Ajustes del servidor Plaspy

Utilice estos ajustes públicos del servidor Plaspy al configurar el MT02. Plaspy usa el mismo puerto para todos los dispositivos soportados y la plataforma detecta automáticamente el protocolo del rastreador.

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transporte: soporte para UDP o TCP; configure el que el dispositivo requiera
- Plaspy detecta automáticamente el protocolo del rastreador cuando llegan los mensajes

## Requisitos habituales antes de la configuración

- Una SIM celular válida con datos habilitados y los ajustes APN correctos para el operador local.
- Acceso por SMS o a la herramienta de configuración del fabricante para enviar comandos al MT02.
- El dispositivo encendido y accesible (instalado o con alimentación de banco) para que pueda registrarse en la red.
- El número IMEI del MT02 para identificación del equipo y construcción del ID de dispositivo.
- Conocimiento de la contraseña del equipo si se ha cambiado respecto al valor de fábrica.
- Una cuenta en Plaspy o acceso de administrador para verificar que el dispositivo aparece en la plataforma después de la configuración.

## Cómo se conecta este rastreador a Plaspy

El MT02 se configura para enviar mensajes periódicos de posición y telemetría al punto de conexión y puerto del servidor Plaspy. Plaspy ingiere esos reportes y los presenta como actualizaciones de ubicación, alarmas y rastros históricos en la plataforma. La disposición de servidor y puerto compartidos simplifica la configuración para muchos tipos de dispositivos.

- El rastreador sube ubicación y telemetría al endpoint de Plaspy d.plaspy.com o 54.85.159.138 en el puerto 8888.
- El transporte puede ser UDP o TCP según la configuración del dispositivo; Plaspy acepta ambos y detecta el protocolo automáticamente.
- Los reportes regulares de posición y los mensajes de evento (alarmas, entradas) son reenviados a Plaspy para cartografía y alertas.
- Cuando está fuera de línea, el MT02 puede registrar datos localmente y subir registros almacenados una vez que haya conexión.
- La visibilidad en la plataforma se valida confirmando el IMEI del dispositivo y observando mensajes entrantes en Plaspy.

## Flujo típico de configuración

1. Acceda al método oficial de configuración TopShine para el MT02, normalmente mediante comandos SMS o la herramienta del fabricante, y verifique la contraseña actual del equipo.
2. Ingrese el servidor de Plaspy por dominio o IP usando d.plaspy.com o 54.85.159.138 como dirección del servidor GPRS.
3. Configure el puerto a 8888, tenga en cuenta que Plaspy usa el mismo puerto para todos los dispositivos soportados.
4. Seleccione UDP o TCP si el equipo requiere una selección explícita de transporte.
5. Aplique o guarde la configuración en el dispositivo y, si procede, realice un ciclo de alimentación o reinicio para asegurar que los ajustes entren en efecto.
6. Valide que el dispositivo reporte a Plaspy comprobando en la plataforma los mensajes entrantes asociados al IMEI del equipo.
7. Ajuste intervalos de reporte y umbrales de alarma según sea necesario y confirme la conectividad continua.

## Ejemplos de comandos de configuración

El MT02 soporta configuración vía SMS. A continuación aparecen las plantillas de comandos SMS proporcionadas por el fabricante y una breve explicación de cada una. Los ejemplos usan la contraseña de fábrica 000000 cuando es requerida. El comando de reset se muestra como opcional para puesta a punto inicial o resolución de problemas.

- Reset de fábrica opcional (usar solo cuando sea necesario para borrar ajustes personalizados):
```text
W000000,990,099###
```

- Establecer el ID del dispositivo (use los primeros 14 dígitos del IMEI para este comando). Nota: Plaspy identifica dispositivos por el IMEI completo; use el IMEI como referencia primaria.
```text
W000000,010,[device_id_14]
```
Explicación: Reemplace [device_id_14] con los primeros 14 dígitos del IMEI del dispositivo.

- Configurar el APN del operador. Reemplace los marcadores con los valores de su operador. Si se requieren usuario o contraseña inclúyalos después del APN separados por comas.
```text
W000000,011,[apn]{{,[apnu],[apnp]}}
```
Explicación: [apn] = APN del operador. [apnu] = usuario del APN si es requerido. [apnp] = contraseña del APN si es requerida. Incluya usuario y contraseña solo cuando el operador lo exija.

- Establecer el servidor GPRS a la IP y puerto de Plaspy para que el dispositivo reporte directamente a Plaspy:
```text
W000000,012,54.85.159.138,8888
```

- Cambiar el modo de reporte a GPRS (valor de ejemplo del fabricante):
```text
W000000,013,2
```
Explicación: Este comando comúnmente selecciona GPRS como canal de reporte principal. Confirme el valor numérico con la documentación del fabricante o las notas de firmware vigentes.

- Establecer el intervalo de subida/reporte (valor de ejemplo donde 6 es un intervalo definido por el fabricante):
```text
W000000,014,6
```
Explicación: Ajuste el parámetro final al intervalo de reporte apropiado para su despliegue.

- Obtener IMEI del dispositivo (comando de verificación):
```text
W000000,601
```

Notas sobre los comandos SMS:
- Los comandos anteriores muestran la contraseña de fábrica 000000 insertada después del prefijo del comando. Si la contraseña del dispositivo ha sido cambiada, sustituya por la contraseña actual.
- Reemplace marcadores como [apn], [apnu] y [apnp] con los ajustes de su operador. Reemplace [device_id_14] con el ID derivado del IMEI según la guía del fabricante.
- Tras realizar cambios por SMS puede ser necesario reiniciar el equipo para que los ajustes se apliquen.

## Notas de configuración

- Las revisiones de firmware y hardware pueden modificar la sintaxis exacta de los SMS y los valores de parámetros soportados; confirme siempre con la documentación del dispositivo para su SKU específico del MT02.
- El MT02 soporta métodos de configuración por SMS y GPRS. Use comandos SMS para configuraciones remotas cuando el acceso físico sea limitado, o emplee el software oficial de TopShine cuando esté disponible.
- Elija UDP o TCP según la preferencia del instalador o el comportamiento de la red; Plaspy acepta ambos y detectará automáticamente el protocolo del rastreador.
- Todos los dispositivos que reportan a Plaspy usan el mismo puerto, por lo que el uso consistente del puerto 8888 simplifica despliegues con múltiples equipos.
- Si realiza un reset de fábrica, considere reaplicar contraseñas personalizadas y verificar de nuevo APN y ajustes de servidor, ya que estos pueden haberse borrado.

## Por qué usar Plaspy con esta configuración

Usar el TopShine MT02 con Plaspy ofrece una vía práctica para integrar ubicación de vehículos, telemetría de combustible y controles antirrobo en un flujo de trabajo unificado de gestión de flota. Apuntar el dispositivo al servidor y puerto compartidos de Plaspy garantiza que las posiciones y eventos del equipo se enruten hacia la plataforma para mapeo, alertas e informes.

Aprenda más sobre Plaspy en el sitio principal https://www.plaspy.com y verifique la guía específica de configuración y el comportamiento del firmware con el fabricante en https://www.gztopshine.com/ Tenga en cuenta que las especificaciones del fabricante, los métodos de configuración y el comportamiento del dispositivo pueden cambiar con el tiempo, por lo que siempre confirme las instrucciones actuales en la documentación oficial de TopShine.
