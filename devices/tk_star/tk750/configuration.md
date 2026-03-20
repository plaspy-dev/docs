---
slug: /tk_star/tk750/configuration
id: tk750-configuration
sidebar_label: Configuration
title: TK-Star - TK750 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide to connect the TK-Star TK750 GPS tracker to Plaspy using shared server settings and SMS commands
keywords:
  - TK-Star TK750 configuration
  - TK-Star TK750 setup
  - TK750 Plaspy configuration
  - TK750 GPS tracker setup
  - Plaspy tracker configuration
  - GPS tracker server configuration
  - vehicle tracker configuration
  - fleet tracking setup
  - TK-Star GPS configuration
  - TK750 server setup
---

# TK-Star - TK750 Configuration

This page documents the public configuration context for using the TK-Star TK750 tracker with Plaspy. It focuses on the practical, publicly available steps required to point the TK750 at the Plaspy server and validate connectivity. The guidance here uses the manufacturer-provided SMS command flow where available and highlights the shared Plaspy endpoint and port you will use to integrate the device into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, while exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor tools. The TK750 commonly supports SMS-based commands for basic configuration; the default device password in the public command examples below is 123456 and should be confirmed for your unit before sending commands.

## Configuration Overview

Configuring the TK750 for Plaspy prepares the device to send location and event data to the platform so vehicles and assets appear in live maps and reporting tools. The public setup sequence centers on setting the APN for data connectivity, programming the Plaspy server endpoint and port, and enabling GPRS or packet data mode so the device can reach the server.

- Program the device APN, and APN credentials if required, so the tracker has mobile data access.
- Point the TK750 to the Plaspy server endpoint and port so telemetry is sent to Plaspy.
- Choose the transport mode (UDP or TCP) if the tracker requires a transport selection.
- Set an appropriate upload interval to control how frequently positions are sent to Plaspy.
- Validate the device can register on the mobile network and confirm data session connectivity.
- Verify the device appears and reports correctly in Plaspy after configuration.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP
- Plaspy automatically detects the tracker protocol and uses the same port for all supported devices

## Typical Requirements Before Setup

- A powered TK750 unit installed or temporarily powered for configuration and testing.
- A valid cellular SIM with data service and the operator APN information for your mobile network.
- Access to the TK750 manufacturer configuration method such as SMS commands or vendor software.
- Knowledge of the device password if the tracker requires one for configuration (public examples use 123456).
- A Plaspy account and confirmation that you can add and monitor devices in Plaspy.
- A location with adequate mobile network coverage for initial registration and testing.

## How This Tracker Connects to Plaspy

The TK750 is configured to report position, movement and alarm events to Plaspy by opening a GPRS data session and sending telemetry to the shared Plaspy server endpoint and port. Once the server endpoint and transport are set, Plaspy receives the device’s packets and automatically detects the protocol to display the device in the platform.

- The device sends periodic location updates to d.plaspy.com or 54.85.159.138 on port 8888.
- Transport can be UDP or TCP depending on device settings and operator preference.
- Plaspy reads telemetry and alarm events and maps them to your account for real-time monitoring.
- Upload interval determines how often the device reports to the Plaspy server.
- After successful configuration the device becomes visible in Plaspy for live tracking and event alerts.

## Common Configuration Workflow

1. Access the official TK-Star configuration method for your device such as the SMS command set, the vendor web tool, or the manufacturer configuration app.
2. Ensure the SIM card is active and set the operator APN and any APN credentials required by your network.
3. Enter the Plaspy endpoint by using either d.plaspy.com or the IP 54.85.159.138 as the GPRS server address.
4. Set the port to 8888 and choose UDP or TCP if the device requires a transport selection.
5. Set the desired upload interval so the device reports at an appropriate frequency for your use case.
6. Apply or save the configuration and restart the device if required by the manufacturer procedure.
7. Validate that the device registers on the mobile network, establishes a data session, and reports to Plaspy by checking your Plaspy account for incoming telemetry.

## Example Configuration Commands

The TK750 commonly accepts configuration via SMS commands. The following public command sequence is provided in manufacturer documentation and uses the default device password 123456. Send each line as an individual SMS to the device number unless your vendor documentation specifies batched or alternate methods.

- Optional initial or factory reset (use only if you need to restore factory defaults):
```text
begin123456
```

- Set the operator APN (replace {{apn}} with your operator APN string):
```text
apn123456 {{apn}}
```

- Set the APN username if required (replace {{apnu}} with the APN username):
```text
apnuser123456 {{apnu}}
```

- Set the APN password if required (replace {{apnp}} with the APN password):
```text
apnpasswd123456 {{apnp}}
```

- Set the GPRS server to Plaspy using the public IP and port shown in Plaspy documentation:
```text
adminip123456 54.85.159.138 8888
```

- Set the upload interval to 60 seconds (adjust the value as needed):
```text
upload123456 60
```

- Switch the device to GPRS mode so it uses mobile data for reporting:
```text
gprs123456
```

Notes on the commands and placeholders:
- The default password in these public examples is 123456. Confirm the password for your device before sending any commands.
- Keep placeholders {{apn}}, {{apnu}}, and {{apnp}} and replace them with your operator APN, APN username, and APN password respectively.
- The adminip command above sets the server IP and port to Plaspy. If your device firmware supports domain names you can set d.plaspy.com instead of the IP; verify support in the official TK-Star documentation before using a domain name.
- Commands are shown in the order typically used for initial setup; follow manufacturer guidance for batching, spacing between SMS messages, or command confirmation.

## Configuration Notes

- Firmware versions and regional hardware variants may accept slightly different command formats or support domain names instead of IP addresses; always confirm with the TK-Star documentation for your firmware.
- SMS-based configuration is a common public method for TK750 setup; vendor tools or USB/serial configuration utilities may also be available depending on your device package.
- Choose UDP or TCP based on network considerations and any guidance from your installer; Plaspy supports either protocol and will auto detect the protocol the device uses.
- Keep the device password secure and avoid leaving default credentials where unauthorized parties can access them.
- The upload interval controls server load and battery/ data usage; set it to balance timeliness and cost for your deployment.

## Why Use Plaspy with This Configuration

Using the TK-Star TK750 with Plaspy gives fleet operators real-time visibility, event-driven alerts, and historical route playback through a consistent server endpoint and port. The shared Plaspy settings simplify integration because the platform automatically detects device protocols and uses the same port for all supported trackers, letting you focus on deployment and operational workflows rather than bespoke server details.

Learn more about Plaspy and how it supports fleet management and theft mitigation at https://www.plaspy.com. For the most current device-specific configuration commands, firmware notes, and installation details consult the TK-Star official website https://www.tk-star.com/ to verify manufacturer guidance and any changes to setup methods over time.
