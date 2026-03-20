---
slug: /gosafe/g1s/protocol
id: g1s-protocol
sidebar_label: Protocol
title: Gosafe - G1S Protocol
sidebar_class_name: menu_item_tracker
description: Public protocol overview for the Gosafe G1S and how it communicates with Plaspy for reliable GPS reporting
keywords:
  - Gosafe G1S protocol
  - Gosafe G1S GPS protocol
  - Gosafe G1S communication protocol
  - Gosafe G1S tracking protocol
  - Gosafe tracker Plaspy
  - G1S protocol Plaspy
  - G1S GPS tracking
  - Gosafe GPS tracker protocol
  - Gosafe fleet tracking
  - Gosafe G1S compatibility
---

# Gosafe - G1S Protocol

This page provides the public protocol context for using the Gosafe G1S portable GPS tracker with Plaspy. It describes how the device typically communicates with Plaspy servers, what role the tracker reporting protocol plays in that communication, and which connection settings are used by Plaspy for device reporting. The goal is to clarify integration-relevant details while keeping sensitive or manufacturer proprietary specifics out of scope.

The Gosafe G1S is a compact portable tracker that supports replaceable CR123 batteries or rechargeable batteries and can be charged via an external connector. The G1S design and battery options influence reporting patterns and operational lifetime. Plaspy uses shared connection settings across supported devices and automatically detects the tracker protocol, though exact protocol behavior can vary by firmware version, hardware revision, and manufacturer implementation.

## Protocol Overview

The tracker protocol is the set of behaviors and message exchanges the G1S uses to report location, status, and configuration events to a remote server. For Plaspy integration, the important public facts are about how the device reaches the Plaspy endpoint and what the protocol enables rather than the private binary layout of messages.

- Enables the G1S to identify itself and send periodic or event driven location updates to Plaspy
- Carries timestamp, location, and basic status fields that Plaspy uses to present usable tracking data
- Supports different transport modes so the device can use the most appropriate network path for the deployment
- Allows configuration commands from the device side such as reporting intervals and power management preferences
- Serves as the bridge between the device hardware behavior and Plaspy where parsing and mapping create meaningful telemetry

## How Plaspy Detects the Protocol

Plaspy receives incoming device connections on a shared endpoint and inspects the incoming traffic to determine the correct handling logic. In most standard deployments you do not need to manually select a protocol inside Plaspy when the device is configured to report to the Plaspy endpoint.

- Plaspy server domain for device reporting is d.plaspy.com
- Plaspy also accepts connections directed to its public IP 54.85.159.138
- All devices supported by Plaspy use the same server port for reporting
- Plaspy automatically detects the tracker protocol once the device connects and sends its initial reports
- When a device is properly pointed to the Plaspy endpoint manual protocol selection is rarely required

## Transport and Connection Context

Connection and transport are distinct from protocol details. The G1S can be set to send data over common transport layers depending on device capabilities and network environment. Knowing the available transport options helps with initial device setup and firewall configuration.

- The G1S may be configured to use either UDP or TCP on port 8888 depending on device support and chosen configuration
- Devices can be pointed to the Plaspy server using d.plaspy.com or the IP address 54.85.159.138
- Plaspy uses the same port value 8888 for all supported devices to simplify fleet configuration
- Choice between UDP and TCP can affect delivery behavior and should match the device configuration set on the tracker
- Ensure outbound connectivity from the device network to d.plaspy.com on the configured transport and port

## Protocol Compatibility Notes

- Firmware versions on the G1S can change field availability and reporting behavior; check the device firmware notes
- Hardware revisions or accessory configurations may alter power draw and reporting intervals which affect how often messages are sent
- Manufacturer side settings or region specific builds can introduce minor protocol variations between units
- Transport selection UDP versus TCP must match the device configuration to ensure reliable delivery
- Plaspy detects the protocol automatically but validating one device first reduces rollout surprises
- Always verify device specific configuration procedures in the official manufacturer documentation

## Why Protocol Understanding Matters

Understanding the communication protocol between the G1S and Plaspy helps ensure reliable reporting, effective troubleshooting, and predictable battery life in the field. Clear protocol context makes it easier to align device settings, network configuration, and Plaspy expectations for consistent telemetry.

- Helps troubleshoot connectivity issues by confirming transport and endpoint settings
- Guides optimal reporting intervals to balance battery life and location granularity
- Clarifies which device behaviors are expected versus those caused by firmware differences
- Enables informed network configuration such as firewall rules and NAT handling
- Reduces time to diagnose intermittent reporting or configuration mismatches

## Why Use Plaspy with This Protocol

Using Plaspy with the Gosafe G1S gives organizations a straightforward way to collect and visualize location and status information from portable trackers. Plaspy’s shared endpoint and automatic protocol detection reduce the need for manual protocol selection, letting teams focus on deployment and operational monitoring rather than low level parsing.

To learn more about how Plaspy can work with devices like the Gosafe G1S visit https://www.plaspy.com. For the most current firmware specific behavior and device implementation details confirm the latest manufacturer documentation at https://gosafesystem.com/ .
