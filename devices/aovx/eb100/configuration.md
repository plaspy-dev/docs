---
slug: /aovx/eb100/configuration
id: eb100-configuration
sidebar_label: Configuration
title: AOVX - EB100 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX EB100 configuration for Plaspy server setup and public tracking workflow
keywords:
  - AOVX EB100 configuration
  - AOVX EB100 setup for Plaspy
  - AOVX EB100 server configuration
  - AOVX EB100 GPS platform setup
  - AOVX EB100 tracking software configuration
  - EB100 configuration guide
  - EB100 Plaspy setup
  - AOVX tracker configuration
  - Bluetooth sensor tag setup
  - environmental sensor tag configuration
---

# AOVX - EB100 Configuration

This page covers the public configuration context for using the AOVX EB100 with Plaspy. The EB100 is described as an environmental sensor tag, and the setup information here focuses on the public commands and server values available for preparing the device to send data into the Plaspy platform.

Plaspy uses shared server settings across supported devices and automatically detects the tracker protocol. That means the main configuration goal is to point the EB100 to the correct Plaspy endpoint and confirm that the manufacturer-side setup is completed in a way that matches the device firmware, hardware revision, installation method, and vendor tools in use.

## Configuration Overview

The EB100 must be prepared so it can send its data to the Plaspy server endpoint using the public settings provided for this model. In practice, configuration is about setting the network parameters, confirming the reporting interval, and validating that the device is ready to forward data through the intended communication path.

- Set the device to use the Plaspy server endpoint and port for reporting.
- Confirm that the device is configured with the correct carrier APN before attempting data transmission.
- Apply the reporting interval so the device sends updates at the expected frequency.
- Enable the data mode required for the device to communicate with the Plaspy platform.
- Verify the saved settings using the public check commands when available.
- Confirm that the device is reporting through the shared Plaspy service and that data appears correctly in the platform.

## Plaspy Server Settings

Use the following public Plaspy settings for the EB100 configuration:

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for this type of configuration

## Typical Requirements Before Setup

Before applying the configuration, make sure the EB100 is ready for provisioning and that you have the official manufacturer method available.

- Confirm that you have access to the official AOVX configuration method or software.
- Make sure the device is powered and ready for setup.
- Prepare the carrier APN details if the device will be using mobile data.
- Verify that you can send the public setup commands using the supported manufacturer method.
- Check that the firmware and hardware revision match the configuration guidance you are following.
- Review the latest manufacturer documentation before deploying at scale.

## How This Tracker Connects to Plaspy

The EB100 uses the public configuration values to direct its reporting toward the Plaspy service. Once the device is set up, it can forward its data using the specified server domain or IP and the shared port used by Plaspy, while Plaspy automatically identifies the protocol used by the tracker.

- The device is pointed to d.plaspy.com or 54.85.159.138 for Plaspy communication.
- The shared port 8888 is used for device reporting.
- UDP or TCP can be selected when the device or manufacturer tool requires a transport choice.
- Plaspy automatically detects the tracker protocol, reducing the need for manual platform-side protocol selection.
- After the device is saved and restarted if required, it should begin reporting into the Plaspy environment.

## Common Configuration Workflow

1. Open the official AOVX configuration method or manufacturer software for the EB100.
2. Enter the carrier APN required for data connectivity if the setup flow asks for it.
3. Set the server address to d.plaspy.com or, if preferred, the Plaspy IP 54.85.159.138.
4. Configure port 8888 as the reporting port.
5. Choose UDP or TCP if the device or tool requires a transport selection.
6. Save or apply the configuration changes in the manufacturer tool or via the supported message flow.
7. Restart the device if the setup procedure requires it.
8. Validate that the tracker is reporting correctly to Plaspy and that the device appears as expected.

## Example Configuration Commands

The EB100 public setup flow uses text message commands. The exact method may vary depending on the manufacturer tool, firmware, or deployment process, but the public command sequence below reflects the available configuration information.

- Configure the carrier APN

```text
APN,{{apn}}#
```

If username and password are required by the carrier profile, the placeholders can be included as provided by the manufacturer flow:

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

- Switch the device to GPRS mode

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

- The public commands shown above should be entered exactly as supported by the device workflow and firmware.
- If your deployment method requires UDP or TCP selection, follow the manufacturer guidance for that transport choice.
- The Plaspy endpoint is shared across supported devices, and the platform automatically detects the tracker protocol.
- The EB100 is described as an environmental sensor tag, so the setup focus is on connectivity and reporting rather than GPS-specific configuration.
- For the most reliable results, compare the public setup flow with the latest AOVX documentation before deployment.

## Why Use Plaspy with This Configuration

Using the EB100 with Plaspy allows environmental sensor data to be collected in the same platform used for monitoring and operational oversight. That makes it easier to combine condition data with broader fleet or logistics workflows, especially when the EB100 is deployed alongside other connected devices.

Plaspy’s shared server configuration and automatic protocol detection simplify the platform-side setup, while the EB100 configuration focuses on preparing the tracker to report consistently. If you want to learn more about Plaspy, visit https://www.plaspy.com. For the latest device-specific setup details, firmware behavior, and manufacturer guidance, please verify the current documentation on https://www.aovx.com/.
