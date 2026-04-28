---
slug: /aovx/eb110/configuration
id: eb110-configuration
sidebar_label: Configuration
title: AOVX - EB110 Configuration
sidebar_class_name: menu_item_tracker
description: AOVX EB110 configuration for Plaspy with server setup, public SMS commands, and practical steps for tracker integration
keywords:
  - AOVX EB110 configuration
  - AOVX EB110 setup for Plaspy
  - AOVX EB110 server configuration
  - AOVX EB110 GPS platform setup
  - AOVX EB110 tracking software configuration
  - AOVX EB110 device setup
  - AOVX tracker configuration
  - Plaspy tracker setup
  - GPS tracker configuration
  - fleet tracking setup
---

# AOVX - EB110 Configuration

This page covers the public configuration context for using the AOVX EB110 with Plaspy. It brings together the shared Plaspy server settings and the publicly available setup commands that can be used to point the tracker toward the Plaspy platform.

Plaspy uses the same server port for all supported devices, and it automatically detects the tracker protocol after the device connects. Exact manufacturer-side setup steps can still vary depending on firmware, hardware revision, installation type, and the tools provided by the vendor.

## Configuration Overview

The AOVX EB110 is configured by sending public setup commands that prepare the device to communicate with the Plaspy server. The goal is to define the network destination, confirm the reporting interval, and bring the tracker online so it can be recognized by Plaspy.

- Set the tracker to report to the shared Plaspy server endpoint.
- Use the public Plaspy port so the device can connect consistently with other supported trackers.
- Apply the carrier APN so mobile data access can be established correctly.
- Set a practical update interval so the device reports at the expected frequency.
- Switch the device into GPRS reporting mode when required by the manufacturer workflow.
- Verify the saved settings before putting the unit into service.

## Plaspy Server Settings

- Server domain d.plaspy.com
- Server IP 54.85.159.138
- Port 8888
- Transport support for UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol after the device starts reporting
- All supported devices in Plaspy use the same port, which simplifies deployment across mixed tracker fleets

## Typical Requirements Before Setup

- Confirm that the EB110 is ready for configuration using the manufacturer method or tool.
- Make sure you have access to the carrier APN details needed for mobile data setup.
- Check that the device can send configuration commands through the supported public method.
- Review the current AOVX documentation for any firmware-specific steps that may affect setup.
- Prepare the Plaspy server values before applying the device configuration.
- Keep the device nearby so you can validate the response after the commands are sent.

## How This Tracker Connects to Plaspy

The EB110 connects to Plaspy by being pointed to the shared Plaspy server endpoint and port, then reporting data in the format expected by the platform. Once the device is online, Plaspy automatically identifies the tracker protocol, so the configuration process focuses on correct server targeting and basic connectivity.

- The tracker is configured to send data to d.plaspy.com or to the IP 54.85.159.138.
- Communication uses port 8888, which is the same port used across supported Plaspy devices.
- UDP or TCP can be used on port 8888 if the device requires a specific transport selection.
- After the tracker starts reporting, Plaspy detects the protocol automatically.
- Ongoing reporting allows the platform to display device activity and operational status.
- A successful connection confirms that the unit is ready for monitoring inside Plaspy.

## Common Configuration Workflow

1. Open the official AOVX configuration method or software for the EB110.
2. Enter the carrier APN details required by the device using the manufacturer setup flow.
3. Configure the server destination as d.plaspy.com or, if needed, 54.85.159.138.
4. Set the port to 8888.
5. Choose UDP or TCP if the device or firmware requires a transport selection.
6. Apply or save the configuration in the manufacturer tool or via the supported command method.
7. Restart the device if the setup process requires it.
8. Confirm that the tracker reports successfully to Plaspy and that the protocol is detected automatically.

## Example Configuration Commands

The EB110 public configuration flow includes SMS based commands. The placeholders in the APN command represent the carrier values that must be substituted before sending the command.

- Configure the carrier APN

```text
APN,{{apn}}# 
```

If the carrier requires APN username and password, include the optional placeholders as provided by the manufacturer flow:

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

- The public command flow is SMS based, but the exact sending method can vary by firmware and manufacturer tool.
- UDP and TCP are both supported on the Plaspy side for port 8888, so use the transport expected by the device.
- The shared server model keeps deployment simpler because the same port applies across supported devices in Plaspy.
- If the device does not connect after setup, review the APN, server value, and transport choice before changing anything else.
- Manufacturer documentation remains the best source for device specific behavior, especially when firmware revisions introduce setup differences.

## Why Use Plaspy with This Configuration

Using the AOVX EB110 with Plaspy gives organizations a practical way to standardize tracker setup around a shared server endpoint while keeping protocol handling simple. Because Plaspy automatically detects the tracker protocol, teams can focus on applying the correct public server settings and validating that the unit is reporting as expected.

This makes the EB110 easier to integrate into broader tracking workflows, especially when consistency across devices matters. For more about Plaspy and its platform capabilities, visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and manufacturer guidance, please verify the current documentation at https://www.aovx.com/.
