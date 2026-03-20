---
slug: /skymobile/sm_8570/configuration
id: sm_8570-configuration
sidebar_label: Configuration
title: SkyMobile - SM-8570 Configuration
sidebar_class_name: menu_item_tracker
description: Public configuration guidance for connecting the SkyMobile SM-8570 to Plaspy with practical server settings and example SMS commands
keywords:
  - SkyMobile SM-8570 configuration
  - SM 8570 setup
  - SkyMobile tracker configuration
  - SM 8570 Plaspy setup
  - Plaspy device configuration
  - GPS tracker server configuration
  - SM 8570 SMS commands
  - GPS tracking platform setup
  - vehicle tracking configuration
  - tracker integration guide
---

# SkyMobile - SM-8570 Configuration

This page documents the public configuration context for using the SkyMobile SM-8570 GPS tracker with Plaspy. It focuses on the practical settings and commands that are publicly available so you can point the device at Plaspy servers and validate connectivity. The device description used here notes the SM-8570 is a quad band GSM GPS locator with strong reception, SMS capability, and compatibility with the @Track protocol, which helps explain the available configuration options.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol used by the SM-8570. Exact manufacturer-side setup steps can vary by firmware version, hardware revision, installation type, and vendor configuration tools. Where available, this page includes the model's public SMS commands and explains how they relate to Plaspy server settings.

## Configuration Overview

This configuration process prepares the SM-8570 to communicate with Plaspy by setting the cellular APN, configuring the GPRS server and port, and enabling reporting options that make the device visible in the Plaspy platform.

- Configure the operator APN so the device can use cellular data for reporting.
- Point the device GPRS server settings to Plaspy so location and events are sent to the platform.
- Set reporting intervals and event reporting so the device provides timely updates.
- Optionally enable SOS and other functional keys to report specific alerts to Plaspy.
- Disable or adjust power saving modes so the device reports as required for your use case.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol when the device connects

## Typical Requirements Before Setup

- A charged and powered SM-8570 with basic functional testing completed.
- An active SIM card provisioned for data and SMS as required by the device and your network.
- Ability to send SMS configuration commands or access to the official manufacturer configuration software or tool.
- Knowledge of the device password for SMS configuration (the public example here uses the default password SM8570).
- Confirmed APN values from the SIM operator to fill {{apn}}, {{apnu}}, and {{apnp}} placeholders.
- Access to the manufacturer's documentation or vendor support for firmware specific behaviors.

## How This Tracker Connects to Plaspy

The SM-8570 is configured to send location and event data to a centralized Plaspy endpoint. The device’s GPRS server settings are set to point at the shared Plaspy server and port so Plaspy receives tracking updates and can display them in the platform.

- The device sends location packets to d.plaspy.com on port 8888.
- Plaspy accepts connections on the same port for all supported devices and detects the protocol automatically.
- Transport can be configured as UDP or TCP depending on device options and network considerations.
- Events such as SOS or motion-triggered reports can be enabled to forward alerts to Plaspy.
- Plaspy aggregates device data for visibility, reporting, and operational monitoring.

## Common Configuration Workflow

1. Access the official manufacturer configuration method or software; for many SM-8570 installations this is SMS-based configuration or a vendor configuration tool.
2. Enter the Plaspy server hostname d.plaspy.com or the server IP 54.85.159.138 in the GPRS server settings.
3. Set the server port to 8888 as required by Plaspy.
4. Choose UDP or TCP transport if the device requires a transport selection.
5. Configure the APN and any operator credentials so the device has data connectivity.
6. Apply or save the configuration and restart the device if the device or vendor instructions require it.
7. Validate that the SM-8570 reports to Plaspy and appears in the platform, and adjust reporting intervals or event settings as needed.

## Example Configuration Commands

The SM-8570 can be configured by sending SMS commands to the device. The public example commands below preserve the sequence shown in manufacturer examples. The device password in these commands is the default SM8570. Replace the placeholders {{apn}}, {{apnu}}, and {{apnp}} with your operator APN, username, and password as required.

- Set the operator APN (replace placeholders as needed)
```text
AT+GTBSI=SM8570,{{apn}},{{apnu}},{{apnp}},,,,,0002$
```

- Set the GPRS server to point at Plaspy (domain and IP provided)
```text
AT+GTSRI=SM8570,4,,,d.plaspy.com,8888,54.85.159.138,8888,,0,1,,,,,0003$
```

- Set the reporting update interval
```text
AT+GTFRI=SM8570,1,1,,,0000,2359,300,300,,,1F,,,,,,,,,0007$
```

- Enable SOS button reporting
```text
AT+GTFKS=SM8570,1,,1,1,1,,,ffff$
```

- Disable or adjust power saving mode
```text
AT+GTNMD=SM8570,8,3,2,3,1800,1800,,,,,,,,0005$
```

Notes on placeholders and usage:
- {{apn}} is the operator APN string required for GPRS data.
- {{apnu}} is the APN username if the operator requires one; leave empty if not required.
- {{apnp}} is the APN password if required by the operator.
- Send each command as an SMS to the device from an authorized number, or use the official configuration tool if available.
- Keep the default password SM8570 if your device still uses it; change the password according to vendor guidance after setup if desired.

## Configuration Notes

- Manufacturer firmware versions and hardware revisions may alter command syntax or available parameters; always confirm with vendor documentation.
- The SM-8570 supports SMS based configuration as shown; some installers prefer a vendor tool or USB/serial configuration where available.
- Choosing UDP or TCP can affect reliability and network behavior; test both transports in your deployment environment.
- Plaspy uses the same port 8888 for all supported devices and the platform automatically detects the tracker protocol on connection.
- Keep a record of changed passwords and configuration steps to support maintenance and troubleshooting.

## Why Use Plaspy with This Configuration

Using the SM-8570 with Plaspy gives organizations a straightforward way to capture GPS position and event data from a proven quad band GSM tracker and consolidate that data into a single platform for monitoring and reporting. The public SMS configuration options make it practical for field installations where vendor tools are not available, while Plaspy’s automatic protocol detection and shared server settings simplify integration.

To learn more about Plaspy and platform capabilities visit https://www.plaspy.com. Manufacturer specifications, firmware behavior, and setup procedures can change over time so verify the latest device-specific details on the SkyMobile website http://www.skymobile.com.co.
