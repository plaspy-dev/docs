---
slug: /globalsat/gtr_388/configuration
id: gtr_388-configuration
sidebar_label: Configuration
title: GlobalSat - GTR-388 Configuration
sidebar_class_name: menu_item_tracker
description: Configure el GlobalSat GTR-388 para usarlo con Plaspy, incluyendo comandos SMS y ajustes de servidor necesarios
keywords:
  - Configuración GlobalSat GTR-388
  - Instalación GTR-388
  - GTR-388 Plaspy
  - Configuración de rastreador GPS
  - Instalación rastreador de vehículos
  - Configuración de servidor GTR-388
  - Ajustes del servidor Plaspy
  - Configuración SMS GTR-388
  - Instalación de rastreador GlobalSat
  - Configuración GPS para eBike
---

# GlobalSat - GTR-388: Configuración

En esta página se describe el contexto público de configuración para utilizar el rastreador GlobalSat GTR-388 con la plataforma Plaspy. Se explican los pasos y comandos visibles para el fabricante que se usan comúnmente para apuntar un dispositivo GTR-388 hacia Plaspy, de modo que el equipo pueda reportar ubicación y estado a la plataforma.

Plaspy usa ajustes de servidor compartidos entre los dispositivos soportados y detecta automáticamente el protocolo del rastreador. Los pasos exactos y los nombres de menú en el dispositivo pueden variar según la versión de firmware, la revisión de hardware, el tipo de instalación y las herramientas del proveedor. Cuando está disponible, esta página incluye comandos SMS públicos y orientación sobre el checksum extraída de ejemplos de configuración del fabricante para ayudar en la puesta a punto.

## Resumen de configuración

El objetivo de la configuración es preparar el GTR-388 para comunicarse de forma confiable con Plaspy y confirmar que el rastreador aparece en la plataforma. Normalmente la configuración implica establecer el endpoint del servidor Plaspy y el puerto, elegir un transporte y validar que el dispositivo reporte correctamente tras un reinicio.

- Establecer el destino del servidor del dispositivo hacia el servidor Plaspy para que la telemetría se envíe al endpoint correcto.
- Configurar el dispositivo para usar el puerto 8888, que es el puerto compartido que Plaspy utiliza para todos los dispositivos.
- Elegir el transporte UDP o TCP en el dispositivo si la interfaz lo requiere.
- Aplicar o enviar la configuración mediante el método soportado por el fabricante, comúnmente SMS o software del proveedor.
- Reiniciar o rebootear el rastreador cuando sea necesario para aplicar los ajustes y luego validar en Plaspy.

## Ajustes del servidor Plaspy

- Dominio del servidor d.plaspy.com
- IP del servidor 54.85.159.138
- Puerto 8888
- Transportes soportados UDP o TCP
- Plaspy detecta automáticamente el protocolo del rastreador

Estos valores son los ajustes públicos de Plaspy a los que debe apuntar el GTR-388 para que el dispositivo pueda entregar datos a la plataforma Plaspy.

## Requisitos previos habituales

- Un GTR-388 alimentado con una SIM operativa que soporte el método de configuración elegido (por ejemplo SMS o datos), según su despliegue.
- Acceso al IMEI del dispositivo, que suele ser requerido por muchos comandos SMS o comandos remotos.
- Un método para enviar SMS al dispositivo o acceso a la herramienta oficial de configuración de GlobalSat, cuando esté disponible.
- Conocimiento de los ajustes APN de su operador si el dispositivo necesita parámetros de datos celulares para conectividad GPRS o LTE.
- Acceso a la plataforma Plaspy para validar el dispositivo una vez aplicada la configuración.

## Cómo se conecta este rastreador a Plaspy

El GTR-388 puede configurarse para enviar posiciones y eventos a Plaspy apuntando al endpoint y puerto compartidos de Plaspy. Una vez configurada la dirección del servidor y el puerto y el rastreador está en línea, Plaspy detectará el protocolo y comenzará a procesar los datos entrantes.

- El rastreador envía reportes periódicos de posición y mensajes de eventos al endpoint configurado de Plaspy.
- Los datos se entregan a Plaspy en el puerto 8888 usando UDP o TCP según lo configurado en el dispositivo.
- Plaspy realiza detección automática de protocolo para aceptar formatos de rastreadores soportados.
- Una configuración correcta hace que el dispositivo sea visible en la vista de flota de Plaspy y comience a reportar telemetría.
- Guardar o reiniciar la configuración suele desencadenar que el dispositivo abra la conexión configurada hacia Plaspy.

## Flujo de configuración típico

1. Acceda al método oficial de configuración de GlobalSat, al software del proveedor o prepárese para enviar comandos SMS según las instrucciones de GlobalSat.
2. Ingrese el dominio del servidor Plaspy d.plaspy.com o la IP del servidor Plaspy 54.85.159.138 en el campo de servidor del dispositivo donde se aceptan endpoints.
3. Configure el puerto a 8888, que Plaspy usa para todos los dispositivos soportados.
4. Seleccione UDP o TCP como transporte si el dispositivo requiere elegir el transporte.
5. Aplique o guarde la configuración según el método del dispositivo, o envíe el comando SMS de configuración si utiliza SMS.
6. Reinicie o reinicie el dispositivo si es necesario para aplicar los nuevos ajustes.
7. Valide que el dispositivo reporte a Plaspy revisando la lista de dispositivos y la telemetría reciente en la plataforma Plaspy.

## Ejemplos de comandos de configuración

Los siguientes comandos son ejemplos públicos en formato SMS extraídos de una configuración común del GTR-388. Estos comandos se envían como mensajes SMS al rastreador. Conserve los marcadores de posición y calcule el checksum exactamente como lo requiere el dispositivo.

Nota: El ejemplo usa la IP del servidor Plaspy 54.85.159.138 y el puerto 8888. Si su dispositivo o firmware soporta nombres de host puede usar d.plaspy.com en la interfaz del dispositivo donde corresponda. Los comandos SMS a continuación muestran el estilo del fabricante que incluye marcadores de posición y un checksum.

- Comando de configuración para ajustar valores APN y el servidor Plaspy

```text
GSS,[imei],3,0,D1=[apn],D2=[apnu],D3=[apnp],E0=54.85.159.138,E1=8888,A1=1*[checksum]!
```

- Comando de reinicio para reiniciar el dispositivo y aplicar los ajustes (opcional pero común)

```text
GSC,[imei],3,0,LH*[checksum]!
```

- Ejemplo de cadena de formato referenciada en el ejemplo del fabricante

```text
TSPRXAB27GHKLMnaicz*U!
```

Explicación de marcadores de posición:
- [imei] — Reemplace por el número IMEI del dispositivo.
- [apn] — Reemplace por el nombre APN del operador si el dispositivo necesita conectividad de datos.
- [apnu] — Reemplace por el usuario APN si aplica, o deje vacío si no se usa.
- [apnp] — Reemplace por la contraseña APN si aplica, o deje vacío si no se usa.
- [checksum] — Reemplace por el checksum calculado para la porción del comando anterior al asterisco. El ejemplo del fabricante calcula un checksum XOR sobre los caracteres del comando antes del '*' y convierte ese valor a dos dígitos hexadecimales en mayúsculas.

Nota sobre generación de checksum:
- El ejemplo en JavaScript del contenido del fabricante calcula el checksum haciendo XOR de los códigos de caracteres del comando hasta pero sin incluir el '*' y luego convierte ese valor a una cadena hex de dos caracteres en mayúsculas. Use la herramienta del proveedor o un pequeño script para obtener el checksum correcto antes de enviar el SMS.

## Notas de configuración

- Las versiones de firmware y las revisiones regionales de hardware pueden cambiar la sintaxis de los comandos o las funciones soportadas; siempre verifique con la documentación más reciente de GlobalSat.
- El GTR-388 soporta configuración por SMS como se muestra en el ejemplo público. Si tiene acceso al software del proveedor, este puede automatizar el cálculo del checksum y la entrada del servidor.
- Al elegir TCP frente a UDP considere su entorno de red y el comportamiento del operador móvil; ambos transportes son soportados y Plaspy aceptará cualquiera en el puerto 8888.
- Plaspy usa el mismo puerto 8888 para todos los dispositivos soportados y detectará automáticamente el protocolo del rastreador cuando el dispositivo empiece a reportar.
- Si el rastreador permite especificar un nombre de host en la interfaz del dispositivo, puede usar d.plaspy.com donde corresponda; el ejemplo público por SMS usa la IP explícita 54.85.159.138.

## Por qué usar Plaspy con esta configuración

Configurar el GlobalSat GTR-388 para reportar a Plaspy aporta a las organizaciones una visibilidad coherente sobre flotas de vehículos y eBikes utilizando un endpoint de servidor compartido. Usar los ajustes públicos anteriores simplifica el despliegue porque Plaspy emplea un único puerto y detección automática de protocolos, lo que reduce la complejidad de configuración por dispositivo y facilita escalar la monitorización de muchos rastreadores.

Para obtener más información sobre Plaspy visite https://www.plaspy.com. Para comportamiento específico de firmware, sintaxis de comandos e instrucciones de configuración actualizadas, verifique los detalles en el sitio de GlobalSat https://www.globalsat.com.tw/ ya que las especificaciones y los métodos de configuración del fabricante pueden cambiar con el tiempo.
