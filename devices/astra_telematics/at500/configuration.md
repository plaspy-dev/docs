---
slug: /astra_telematics/at500/configuration
id: at500-configuration
sidebar_label: Configuration
title: Astra Telematics - AT500 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guide for Astra Telematics AT500 showing Plaspy server settings and SMS commands for integration
keywords:
  - Astra Telematics AT500 configuration
  - AT500 Plaspy setup
  - AT500 server configuration
  - AT500 GPS tracker setup
  - AT500 SMS configuration commands
  - Plaspy tracker integration
  - Plaspy server settings
  - asset tracker configuration guide
  - AT500 BLE provisioning
  - compact asset tracker setup
---

# Astra Telematics - AT500 Configuration

This page covers the public configuration context required to connect the Astra Telematics AT500 Mini Asset Tracker to the Plaspy platform. It summarizes the Plaspy server settings you will use, outlines typical prerequisites, and presents the publicly available SMS commands used by the AT500 for basic server and APN configuration when that method is supported.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol, but exact manufacturer-side setup steps can vary by firmware, hardware revision, installation type, and vendor tools. The guidance here centers on the public Plaspy endpoint values and practical steps for applying them to the AT500. For device-specific details such as BLE provisioning workflows, on‑device menus, or firmware-specific command syntax, consult the official Astra Telematics documentation.

## Configuration Overview

Preparing an AT500 for Plaspy involves setting the device network and server parameters so it can report telemetry to the Plaspy endpoint and be visible in your fleet console. The following tasks summarize the practical purpose of the configuration process.

- Point the AT500 to the Plaspy server endpoint so location and device telemetry reach Plaspy.
- Configure APN credentials if required by the carrier or eSIM profile to enable cellular data.
- Select the transport (UDP or TCP) and confirm the device is using Plaspy's shared port for reporting.
- Validate connectivity and telemetry in Plaspy so the device appears in your tracking dashboard.
- Save and apply settings, then confirm the tracker successfully registers with Plaspy and sends periodic reports.

## Plaspy Server Settings

Use the following public Plaspy server settings when configuring the AT500. These values are the central connection parameters Plaspy requires.

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol for incoming device connections

All devices reporting to Plaspy use the same port and Plaspy will detect the protocol automatically, so configure the AT500 to use port 8888 and choose UDP or TCP as required by the device or firmware.

## Typical Requirements Before Setup

- Confirm the AT500 has adequate battery charge or is connected to power for initial provisioning and testing.
- Ensure cellular coverage for the device region and that the eSIM or SIM is provisioned and allowed to access packet data and SMS as required.
- Have APN credentials available if the network requires username or password authentication (placeholders such as {{apn}}, {{apnu}}, and {{apnp}} may be used in commands).
- Access to the AT500 configuration method you prefer (SMS commands, BLE provisioning app, or vendor software) and any required administrative credentials.
- A phone capable of sending SMS messages from the installer or a BLE-enabled smartphone for local provisioning where supported.
- Access to Plaspy account or fleet console credentials to validate device reporting after configuration.

## How This Tracker Connects to Plaspy

The AT500 reports GNSS position and device telemetry over cellular networks to the Plaspy shared server endpoint and port so the device appears and updates in the Plaspy platform. Configuration ensures the tracker can establish a data session and send periodic or event-driven updates to Plaspy.

- The tracker is configured to send data to the Plaspy server endpoint (d.plaspy.com or the IP 54.85.159.138) on port 8888.
- Transport is set to UDP or TCP depending on the device configuration option and installation preference.
- After connecting, the device transmits location and health telemetry so Plaspy can display real-time position and status.
- Plaspy automatically detects the tracker protocol when data arrives on port 8888, simplifying multi-model support.
- Successful configuration results in the AT500 appearing in the Plaspy console and reporting on the expected schedule.

## Common Configuration Workflow

1. Access the official Astra Telematics configuration method you will use (SMS commands, BLE provisioning app, or vendor configuration tool).
2. Enter the Plaspy server endpoint by specifying either the domain d.plaspy.com or the server IP 54.85.159.138 in the device server settings.
3. Set the server port to 8888 as Plaspy uses the same port across supported devices.
4. Choose UDP or TCP as the transport if the device requires an explicit selection.
5. Configure APN credentials if required by the network using the manufacturer method or SMS commands.
6. Save or apply the configuration and restart the device if the device or firmware requests a reboot to apply settings.
7. Validate that the AT500 reports to Plaspy by checking for the device and telemetry in your Plaspy fleet console.

## Example Configuration Commands

The AT500 can be configured using SMS commands. Below are the public SMS commands published for basic APN and server configuration. Preserve placeholders when inserting carrier information.

- Set the operator APN (replace {{apn}} with your carrier APN)
```text
$APAD,{{apn}}
```

- Set the username for the APN if required (replace {{apnu}} with the APN username)
```text
$APUN,{{apnu}}
```

- Set the password for the APN if required (replace {{apnp}} with the APN password)
```text
$APPW,{{apnp}}
```

- Set the GPRS server to the Plaspy server IP (public command sets the IP directly)
```text
$IPAD,54.85.159.138
```

- Set the server port to Plaspy's shared port
```text
$PORT,8888
```

Notes on placeholders:
- {{apn}} is your mobile network operator APN value.
- {{apnu}} is the APN username if your operator requires one.
- {{apnp}} is the APN password if your operator requires one.

If your provisioning path supports entering a domain name instead of an IP, you can point the tracker to the Plaspy domain d.plaspy.com using your manufacturer tool or app. The exact SMS command syntax for a domain value is dependent on firmware; use the manufacturer's documentation or BLE tool when available.

## Configuration Notes

- Firmware versions and hardware revisions can change command syntax or available settings; verify the commands against the device firmware you have in hand.
- The AT500 supports SMS based configuration as shown here and also provides BLE provisioning paths; choose the method that suits your deployment and installer workflow.
- Select UDP or TCP based on network performance and reliability for your region; both transports are supported by Plaspy on port 8888.
- Applying server IP and port values must match the Plaspy settings to ensure the device registers correctly with Plaspy and that automatic protocol detection can occur.
- Always review the latest Astra Telematics documentation for any manufacturer-supplied tools or updated commands before mass deployment.

## Why Use Plaspy with This Configuration

Using the Astra Telematics AT500 with Plaspy gives small asset and equipment tracking deployments a straightforward path to visibility and operational monitoring. Pointing the AT500 to Plaspy's shared server and port ensures location and device health data flow into a centralized platform that supports alerts, reporting, and fleet oversight.

To learn more about Plaspy and how it can manage AT500 devices at scale visit https://www.plaspy.com. For the latest device specific configuration methods, firmware behavior, and manufacturer guidance verify current information with Astra Telematics at https://astratelematics.com/ as vendor details may change over time.
