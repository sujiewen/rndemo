//
//  RNViewController.m
//  gwyreact
//
//  Created by Sjw on 2019/3/28.
//  Copyright © 2019年 Ideal-link. All rights reserved.
//

#import "RNViewController.h"
#import <React/RCTRootView.h>
#import <React/RCTBundleURLProvider.h>

@interface RNViewController ()

@end

@implementation RNViewController

- (void)viewDidLoad {
    [super viewDidLoad];
    
//    // Do any additional setup after loading the view.
//    NSString * strUrl = @"http://127.0.0.1:8081/index.bundle?platform=ios&dev=true";
//    NSURL * jsCodeLocation = [NSURL URLWithString:strUrl];
//
//    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
//                                                         moduleName:@"testRN"
//                                                  initialProperties:nil
//                                                      launchOptions:nil];
    
    NSURL *jsCodeLocation = [[NSBundle mainBundle] URLForResource:@"index" withExtension:@"jsbundle"];
    
    RCTRootView * rootView = [[RCTRootView alloc] initWithBundleURL:jsCodeLocation
                                                         moduleName:@"testRN"
                                                  initialProperties:nil
                                                      launchOptions:nil];
    self.view = rootView;
}


@end
