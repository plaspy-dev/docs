---
slug: /topfly/torchx_100/configuration
id: torchx_100-configuration
sidebar_label: Configuration
title: TopFly - TorchX 100 Configuration
sidebar_class_name: menu_item_tracker
description: Public setup guide for TopFly TorchX 100 showing Plaspy server settings SMS commands and practical integration steps
keywords:
  - TopFly TorchX 100 configuration
  - TopFly TorchX 100 setup
  - TorchX 100 Plaspy
  - TorchX 100 GPS tracker configuration
  - TopFly OBDII tracker setup
  - Plaspy server settings
  - fleet tracking TorchX 100
  - TorchX 100 SMS configuration
  - vehicle telemetry configuration
  - ELD tracker setup
---

# TopFly - TorchX 100 Configuration

This page covers the public configuration context for using the TopFly TorchX 100 with Plaspy. It summarizes the practical server settings and manufacturer-side steps that are commonly used to prepare the TorchX 100 for reporting location and CAN BUS telemetry into Plaspy dashboards.

Plaspy uses shared server settings across supported trackers and automatically detects the tracker protocol, while the exact manufacturer configuration steps can differ by firmware version, hardware revision, installation type, and vendor tools. The TorchX 100 is an OBDII plug and play tracker with deep CAN BUS telemetry, built on a global 4G Cat 4 platform with fallback to 3G and 2G, and this page links those device characteristics to the public Plaspy configuration values.

## Configuration Overview

The goal of configuration is to point the TorchX 100 at Plaspy, ensure the device has valid mobile connectivity and permissions to send data, and confirm that Plaspy is receiving and interpreting the device protocol. When configured correctly the tracker will report position and vehicle telemetry into Plaspy for real time visibility and historical analysis.

- Configure the device network settings so it can use mobile data and resolve the Plaspy endpoint.
- Set the tracker to report to Plaspy at the shared server endpoint and port that Plaspy uses for all devices.
- Validate connectivity and telemetry reporting so Plaspy can automatically detect the device protocol.
- Apply a sensible reporting interval to balance update frequency and mobile data usage.
- Use manufacturer provided configuration methods such as SMS or vendor tools as required by the TorchX 100.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when data arrives

These values are the public Plaspy settings to use when configuring the TorchX 100. Plaspy uses the same port for all supported devices and performs automatic protocol detection.

## Typical Requirements Before Setup

- Device powered and connected to the vehicle OBDII port or otherwise powered for initial configuration.
- Active SIM card with mobile data enabled and a configured APN for the installed operator.
- Access to the TorchX 100 manufacturer configuration method such as SMS commands or vendor software.
- Knowledge of the device default password if required for SMS or tool based configuration (the sample configuration below uses the default password shown in manufacturer public guidance).
- A tool or phone capable of sending plain SMS commands if using SMS based configuration.
- Confirmed firmware compatibility for server configuration steps where possible.

## How This Tracker Connects to Plaspy

The TorchX 100 is configured to send location and CAN BUS telemetry to the Plaspy server endpoint and port listed above. Once the device is pointed at Plaspy and has active mobile connectivity, Plaspy ingests location points and telemetry and will display them in the platform.

- The tracker transmits position and vehicle telemetry to d.plaspy.com or the IP 54.85.159.138 on port 8888.
- Plaspy accepts UDP or TCP transport on the shared port and attempts automatic protocol detection.
- Reporting frequency is set on the device so Plaspy receives updates according to the configured interval.
- CAN BUS data such as ignition status, VIN, odometer and diagnostics are forwarded to Plaspy for visibility.
- Plaspy displays device events and supports alerts based on the received telemetry.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software for the TorchX 100, such as the SMS command interface or vendor configuration tool.
2. Configure the device server to use d.plaspy.com or the IP 54.85.159.138 as the reporting endpoint.
3. Set the device port to 8888.
4. Choose UDP or TCP if the device requires a transport selection.
5. Apply or save the configuration on the device using the manufacturer method.
6. Restart the device if the manufacturer instructions recommend a reboot after configuration.
7. Validate that the device reports to Plaspy by checking device connectivity and seeing telemetry appear in the Plaspy platform.
8. Adjust the reporting interval as needed to balance update frequency and data usage.

## Example Configuration Commands

The TorchX 100 can be configured using SMS commands according to public manufacturer guidance. The sample setup below uses the device default password 0000 shown in the manufacturer instructions. Preserve placeholders when replacing with operator specific values.

- Set the device time zone to UTC 0
```text
GMT,0000,0#
```

- Set the operator APN. Replace the placeholders with your operator values:
  - [apn] is the APN name
  - [apnu] is the APN username if required, otherwise leave empty
  - [apnp] is the APN password if required, otherwise leave empty
```text
APN,0000,[apn],[apnu],[apnp]#
```

- Set the GPRS server to the Plaspy IP and port. This points the device at Plaspy for data reporting
```text
IP,0000,54.85.159.138 8888#
```

- Set the update interval to 60 seconds (example). The format follows the manufacturer SMS syntax
```text
TIMER,0000,60:60:0:0#
```

Notes on these commands
- The example uses the default device password 0000 as shown in the public manufacturer guidance. Change the device password with the manufacturer's recommended method if required for security.
- Replace APN placeholders with your mobile operator values before sending.
- Preserve the trailing hash character (#) as required by the device SMS command format.

## Configuration Notes

- Manufacturer firmware versions and regional hardware revisions can change command syntax or feature availability; verify commands against current manufacturer documentation.
- The TorchX 100 supports SMS based configuration as shown in the public examples; vendor tools or a USB debugging interface may also be available depending on the shipment and firmware.
- Choose UDP or TCP based on your network and reliability needs; Plaspy accepts both on port 8888 and performs automatic protocol detection.
- Because Plaspy uses a single port across supported devices, ensure the device is pointed to 54.85.159.138 or d.plaspy.com on port 8888 for consistent behavior.
- After configuration, confirm the device appears in Plaspy and is reporting CAN BUS telemetry and location as expected.

## Why Use Plaspy with This Configuration

Using the TorchX 100 with Plaspy provides fleet managers and operations teams with a combined solution for real time GPS tracking and rich CAN BUS telemetry. The device's OBDII form factor, ELD support, and frequent reporting capability pair well with Plaspy's automatic protocol detection and centralized server infrastructure to deliver visibility, alerts, and historical reporting for fleet and passenger transport use cases.

Learn more about Plaspy at https://www.plaspy.com and verify the latest device specific setup details and firmware behavior on the manufacturer website https://www.topflytech.com/ . Manufacturer specifications and configuration methods can change over time so confirm the current instructions on the official TopFly documentation before a production rollout.
