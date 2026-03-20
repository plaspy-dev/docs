---
slug: /carscop/cctr_800g_4g/configuration
id: cctr_800g_4g-configuration
sidebar_label: Configuration
title: Carscop - CCTR-800G-4G Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Carscop CCTR-800G-4G showing how to point the device to Plaspy and apply required settings
keywords:
  - Carscop CCTR-800G-4G configuration
  - Carscop tracker setup
  - CCTR-800G-4G Plaspy
  - Carscop GPS tracker configuration
  - CCTR 800G 4G server setup
  - Plaspy tracker integration
  - vehicle tracking configuration
  - asset tracking setup
  - GPS tracker server settings
  - fleet management tracker setup
---

# Carscop - CCTR-800G-4G Configuration

This page covers the public configuration context for using the Carscop CCTR-800G-4G tracker with Plaspy. It describes the shared Plaspy server settings you will point the device to, and summarizes the practical steps and SMS commands that are commonly used to configure the device for platform connectivity. Use this guide to prepare the tracker for reporting to Plaspy and to understand what you need before integration.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup can vary by firmware version, hardware revision, installation type, and vendor tools. The CCTR-800G-4G supports SMS-based configuration as shown in the public command examples below and can be pointed to Plaspy using the common upload IP or domain and port settings documented here.

## Configuration Overview

The goal of this configuration process is to prepare the CCTR-800G-4G to communicate reliably with Plaspy and to validate connectivity so the device appears in your Plaspy account. Depending on how you configure the device (SMS, web tool, or vendor software), the steps will focus on APN and GPRS settings, server addressing, and ensuring the tracker remains online.

- Point the device to the Plaspy server domain or IP so location and event data upload to Plaspy.
- Configure APN and any required APN credentials so the device can create a GPRS connection.
- Set the server address and port used by Plaspy, and choose UDP or TCP transport if required by the device.
- Keep the device online and validate telemetry is visible in Plaspy after setup.
- Use the provided SMS commands for a straightforward, vendor documented method to apply settings if SMS configuration is supported.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol and Plaspy uses the same port for all supported devices

## Typical Requirements Before Setup

- A charged and powered CCTR-800G-4G device and access to it for SMS or physical configuration.
- A valid cellular SIM with data enabled and the correct APN information for the mobile operator.
- Knowledge of the device default password as used in commands; the public example uses 123456 as the default password.
- Access to the manufacturer SMS command list or vendor configuration tool for the CCTR-800G-4G.
- A Plaspy account where you can confirm the device appears and reports after configuration.
- A way to send SMS messages to the device if using SMS-based configuration.

## How This Tracker Connects to Plaspy

The CCTR-800G-4G is configured to upload GNSS telemetry and event data to the Plaspy server endpoint and port. Once APN and server settings are applied, the tracker establishes a GPRS session and sends its data stream to Plaspy where the platform interprets the protocol and displays positions and events.

- The tracker sends periodic location updates and event messages to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on the device firmware and configuration choice.
- Plaspy automatically detects the tracker protocol so no protocol selection on the platform is required.
- After successful configuration the device should be visible in Plaspy and report telemetry, alarms, and battery state as supported.

## Common Configuration Workflow

1. Access the official manufacturer configuration method such as the vendor SMS command list, web configuration tool, or configuration software provided for the CCTR-800G-4G.
2. Enter the Plaspy server domain d.plaspy.com or the Plaspy server IP 54.85.159.138 in the device server settings as supported by the configuration method.
3. Set the port to 8888 and, if prompted by the device, choose UDP or TCP as the transport.
4. Configure the APN and APN credentials for the SIM card so GPRS data is available for uploads.
5. Apply or save the configuration and reboot or restart the device if the manufacturer instructions require it.
6. Validate that the device reports to Plaspy by checking your Plaspy account and confirming telemetry and status messages are received.

## Example Configuration Commands

The CCTR-800G-4G supports SMS-based configuration. The following public commands are provided in manufacturer documentation and preserve the order recommended for initial setup. The example uses the default device password 123456 as shown in public content. Replace placeholders with your operator values before sending.

- Optional initial step to restore factory settings (use only when required):
```text
RESET*123456
```

- Set the time zone to UTC+0:
```text
TIMEZONE*123456*+00
```

- Set the operator APN (replace {{apn}} with your mobile operator APN):
```text
APN*123456*{{apn}}
```

- Set the APN username and password if required by the operator (replace placeholders as needed):
```text
USERNAME*123456*{{apnu}}*{{apnp}}
```

- Configure the GPRS server to point to Plaspy using the Plaspy server IP and port:
```text
IP*123456*54.85.159.138,8888
```

- Keep the tracker online to maintain the connection:
```text
KEEPONLINE*123456
```

Notes about placeholders:
- {{apn}} is the mobile operator APN name.
- {{apnu}} is the APN username if required by your operator.
- {{apnp}} is the APN password if required by your operator.

Send each SMS command to the device number in the order appropriate for your deployment. The reset command is optional and should only be used when you need to restore factory defaults.

## Configuration Notes

- Firmware and hardware revisions may alter available commands or parameter syntax; always verify with the latest manufacturer documentation.
- SMS-based configuration is a common public method for this model, but some deployments may prefer vendor desktop tools or OTA options if provided.
- Choose UDP or TCP based on your installation needs and any guidance from the device firmware; Plaspy accepts both and will detect the protocol automatically.
- The example commands use the default password 123456 as shown in public examples; change the device password after initial setup according to manufacturer recommendations.
- After applying settings, allow time for the device to register on the cellular network and confirm uploads in Plaspy.

## Why Use Plaspy with This Configuration

Pointing the Carscop CCTR-800G-4G to Plaspy provides a straightforward path to live tracking, event alerts, and fleet visibility. Using the shared Plaspy server settings makes integration consistent across devices and reduces configuration complexity so teams can focus on deployment and operations rather than protocol translation.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. For the latest device specific configuration details, firmware notes, and official command references consult the manufacturer site at http://www.carscop.com/ as hardware and firmware behavior can change over time.
