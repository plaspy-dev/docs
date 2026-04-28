---
slug: /aovx/gm100/configuration
id: gm100-configuration
sidebar_label: Configuration
title: AOVX - GM100 Configuration
sidebar_class_name: menu_item_tracker
description: Configure the AOVX GM100 for Plaspy with public server settings, setup steps, and practical tracker guidance.
keywords:
  - AOVX GM100 configuration
  - AOVX GM100 setup for Plaspy
  - AOVX GM100 server configuration
  - AOVX GM100 GPS platform setup
  - AOVX GM100 tracking software configuration
  - GM100 Plaspy compatibility
  - GM100 GPS tracker setup
  - AOVX tracker configuration
  - Plaspy GPS tracker setup
  - shipment tracker configuration
---

# AOVX - GM100 Configuration

This page covers the public configuration context for using the AOVX GM100 with Plaspy. The GM100 is a Plaspy compatible ultra-thin goods tracker intended for discreet shipment and asset monitoring, and the public setup flow focuses on preparing the device to report to Plaspy through the shared server endpoint.

Plaspy uses the same server port for all supported devices and automatically detects the tracker protocol. That simplifies platform-side setup, while the exact manufacturer-side procedure can still vary depending on firmware, hardware revision, installation type, and the official AOVX configuration tool or SMS command flow.

## Configuration Overview

The GM100 is configured so it can send tracking and status information to Plaspy using the public server settings provided below. In practical terms, the goal is to point the tracker to the Plaspy server, confirm the update interval, and verify that the device is able to report data consistently.

- Prepare the device so it can communicate with the Plaspy server endpoint.
- Set the tracker to use the shared Plaspy port used by supported devices.
- Use the manufacturer configuration method to apply the public connection settings.
- Confirm that the tracker is sending location and status updates after setup.
- Check the device response with the available verification command where supported.
- Review the manufacturer documentation if the firmware presents different menu names or command handling.

## Plaspy Server Settings

- Server domain used by Plaspy is d.plaspy.com
- Server IP used by Plaspy is 54.85.159.138
- The port is 8888
- The device may be configured with UDP or TCP on port 8888
- Plaspy automatically detects the tracker protocol
- All devices in Plaspy use the same port for configuration and communication

## Typical Requirements Before Setup

- Make sure the GM100 has power and is ready for configuration.
- Have access to the official AOVX configuration method or tool used for the device.
- Confirm that you can enter the public Plaspy server values during setup.
- Verify that the device firmware supports the configuration workflow shown for this model.
- Keep the manufacturer documentation available in case the command syntax differs by revision.
- Plan to validate the device after saving the settings so you can confirm reporting in Plaspy.

## How This Tracker Connects to Plaspy

The GM100 is configured to send its tracking and device data to Plaspy through the shared server endpoint and port. Once the device is pointed at the Plaspy server, Plaspy can automatically identify the protocol and begin interpreting the tracker communication without requiring different platform ports for separate devices.

- The tracker reports to the Plaspy server domain d.plaspy.com or the server IP 54.85.159.138.
- Communication is sent through port 8888, which is the same port Plaspy uses for supported devices.
- The device may use UDP or TCP if the manufacturer setup requires transport selection.
- Plaspy automatically detects the tracker protocol after the device starts communicating.
- Once connected, the tracker can appear in Plaspy for location visibility and operational monitoring.
- Configuration validation helps confirm that the device is properly linked to the platform.

## Common Configuration Workflow

1. Open the official AOVX configuration method or software for the GM100.
2. Enter the carrier APN information if it is required by your deployment.
3. Configure the server address as d.plaspy.com or, if preferred, 54.85.159.138.
4. Set the communication port to 8888.
5. Select UDP or TCP if the device or tool asks you to choose a transport type.
6. Apply or save the configuration changes in the manufacturer interface.
7. Restart the device if the configuration process requires a reboot.
8. Validate that the device is reporting to Plaspy and confirm the connection is active.

## Example Configuration Commands

The public configuration flow for this model uses text message commands. The exact method may vary by manufacturer tool or firmware, but the commands below show the available public setup sequence.

- Configure the carrier APN

  `APN,{{apn}}#`

  If your carrier requires a username and password, include them with the APN values as provided by the operator.

  `APN,{{apn}},{{apnu}},{{apnp}}#`

- Set the GPRS server to Plaspy

  `SERVER,1,d.plaspy.com,8888,0#`

- Set the update interval

  `TIMER,60,60#`

- Switch the device to GPRS mode

  `GPRSON,1#`

- Check the current configuration

  `PARAM#`

- Check tracker status

  `STATUS#`

## Configuration Notes

- The public command flow shown here is SMS based, so the exact sending method may depend on the device firmware and the manufacturer workflow.
- The APN placeholders represent carrier supplied values and should be replaced with the correct network settings for your SIM or service plan.
- UDP or TCP selection can matter at the device level, but Plaspy will still use the same shared port and automatically detect the tracker protocol.
- Firmware revisions may present slightly different command handling, so manufacturer documentation should remain the reference for device specific behavior.
- If the tracker is already deployed, validate the setup after saving changes to ensure the device starts reporting into Plaspy as expected.

## Why Use Plaspy with This Configuration

Using the AOVX GM100 with Plaspy gives you a practical way to centralize shipment and goods visibility in one tracking platform. The shared server configuration keeps deployment straightforward, while automatic protocol detection helps simplify platform integration across supported devices.

For logistics teams, the result is a cleaner operational workflow for monitoring location updates, reviewing tracker status, and confirming that devices are communicating correctly. To learn more about Plaspy, visit https://www.plaspy.com. For the latest device specific setup details, firmware behavior, and manufacturer guidance, please verify the current documentation on https://www.aovx.com/.
