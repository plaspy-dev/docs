---
slug: /aovx/vl100/configuration
id: vl100-configuration
sidebar_label: Configuration
title: AOVX - VL100 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX VL100 configuration guide for Plaspy setup, server settings, and practical tracker integration steps
keywords:
  - AOVX VL100 configuration
  - AOVX VL100 setup for Plaspy
  - AOVX VL100 server configuration
  - AOVX VL100 GPS tracker setup
  - AOVX VL100 tracking software configuration
  - AOVX VL100 GPS platform setup
  - Plaspy compatible GPS tracker
  - vehicle tracker configuration
  - GPS tracker server setup
  - GT06 tracker setup
---

# AOVX - VL100 Configuration

This page covers the public configuration context for using the AOVX VL100 with Plaspy. The VL100 is described as a compact, cost-effective GPS tracker designed for vehicle monitoring, and it can be prepared for Plaspy by pointing it to the shared Plaspy server settings and applying the tracker’s public setup commands where supported by the manufacturer.

Plaspy uses the same server port across supported devices and automatically detects the tracker protocol, which simplifies deployment across mixed fleets. At the same time, the exact manufacturer-side setup process can vary depending on firmware, hardware revision, installation type, and the vendor tools used to send commands or save settings.

## Configuration Overview

The main goal of the VL100 configuration process is to make the tracker report reliably to Plaspy using the public server endpoint and the tracker’s supported communication method. In practical terms, that means entering the Plaspy server, confirming the transport mode when required, and validating that the device is sending data correctly after the setup is saved.

- Point the device to the Plaspy server endpoint used for supported trackers.
- Use the shared port that Plaspy applies to all supported devices.
- Choose UDP or TCP if the tracker or installer tool requires a transport selection.
- Apply the manufacturer’s public APN and server commands when configuring by SMS.
- Confirm that the device reports data after the settings are stored.
- Use Plaspy’s automatic protocol detection to simplify activation and onboarding.

## Plaspy Server Settings

- Server domain: d.plaspy.com
- Server IP address: 54.85.159.138
- Port: 8888
- Supported transport: UDP or TCP
- Protocol handling in Plaspy: automatic protocol detection
- Shared platform behavior: the same port is used for all supported devices in Plaspy

## Typical Requirements Before Setup

- Make sure the tracker is installed and powered according to the manufacturer’s guidance.
- Confirm that you have access to the official AOVX configuration method or software.
- Verify that the device is ready to accept configuration commands before sending the server settings.
- Review the current manufacturer documentation for model-specific setup behavior.
- Prepare the public Plaspy server details before starting the configuration.
- If you are using SMS setup, ensure the command sender can reach the device reliably.
- Plan to validate the result after saving the configuration so you can confirm that the tracker is reporting.

## How This Tracker Connects to Plaspy

The AOVX VL100 connects to Plaspy by sending tracker data to the shared Plaspy server endpoint on port 8888. Once configured, the device can report into Plaspy for live visibility, event handling, and operational monitoring, while Plaspy automatically identifies the protocol used by the tracker.

- The tracker is directed to d.plaspy.com or the corresponding server IP 54.85.159.138.
- Communication is set to use port 8888, which is the same port used across Plaspy supported devices.
- The device may use UDP or TCP, depending on the manufacturer setup flow and firmware behavior.
- After configuration, the tracker can begin sending data to Plaspy for mapping and monitoring.
- Plaspy automatically detects the protocol, reducing the need for manual protocol selection in the platform.
- Any reporting delay or missing data should be checked first at the device configuration level and then validated in Plaspy.

## Common Configuration Workflow

1. Open the official AOVX configuration method or software that is intended for the VL100.
2. Configure the device to use the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
3. Set the port to 8888 so the tracker sends data to the shared Plaspy endpoint.
4. Choose UDP or TCP if the tracker or tool requires you to select a transport mode.
5. Apply the configuration and save the settings in the manufacturer tool or by the supported command method.
6. If the device requires it, restart the tracker so the new server settings take effect.
7. Validate that the VL100 is reporting to Plaspy and confirm that the tracker appears with the expected data.
8. If needed, send the public verification commands to check the current device configuration and status.

## Example Configuration Commands

The VL100 public setup flow includes SMS commands for APN, server, interval, and GPRS mode configuration. Placeholders in the APN command should be replaced with the values provided by the mobile carrier.

- Configure the carrier APN

```text
APN,{{apn}}#
```

If the APN requires a username and password, the additional placeholders may be included by the device command format.

```text
APN,{{apn}},{{apnu}},{{apnp}}#
```

- Set the GPRS server to Plaspy

```text
SERVER,1,d.plaspy.com,8888,0#
```

- Set the update interval

```text
TIMER,60,60#
```

- Switch the tracker to GPRS mode

```text
GPRSON,1#
```

- Check the current configuration

```text
PARAM#
```

- Check tracker status

```text
STATUS#
```

## Configuration Notes

- The public command flow provided for the VL100 is SMS based, but the exact workflow may still differ by firmware or installer tool.
- Plaspy uses automatic protocol detection, so the platform does not require separate protocol setup when the tracker reports correctly.
- Port 8888 is the shared Plaspy port for supported devices, which helps keep deployment consistent across a fleet.
- UDP or TCP may be selected depending on the configuration method or device behavior, so follow the manufacturer’s public instructions if one mode is required.
- For model-specific behavior, always refer to the current AOVX documentation before final deployment.

## Why Use Plaspy with This Configuration

Using the AOVX VL100 with Plaspy gives organizations a practical way to bring a compact vehicle tracker into a centralized monitoring workflow. With the tracker pointed to the shared Plaspy server settings, teams can focus on visibility, reporting, and day-to-day fleet oversight rather than managing custom server integration details.

Plaspy’s shared port model and automatic protocol detection help make onboarding simpler for supported trackers, while the VL100’s public command flow provides a straightforward path for initial setup and verification. To learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific setup details, firmware behavior, and manufacturer guidance, please verify the current information on the official AOVX website at https://www.aovx.com/.
